"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchProducts } from "./api";
import Card from "@/components/Card";
import CardSkeleton from "@/components/Card/CardSkeleton";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const addToFavorites = (product) => {
    const currentFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];
    // Eğer ürün varsa tekrar eklememek için yazılan bir kontrol
    if (currentFavorites.find((item) => item.id === product.id)) {
      return;
    } else {
      const updatedFavorites = [...currentFavorites, product];
      toast.success("Ürün başarıyla favorilere eklendi!");
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  // Api İsteği
  const getProducts = async () => {
    try {
      setLoading(true); // Apiden gelen yanıt basladığında yükleme durumunu true yap
      const allProducts = await fetchProducts();
      setProducts(allProducts);
    } catch (error) {
      // Hata mesajı gönderirken burası kullanılır
      toast.error("Ürünler yüklenirken hata oluştu");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products, "test");

  return (
    <div>
      <div className="flex justify-around">
        <h1 className="text-xl font-bold my-4 flex justify-center items-center">
          Tüm Ürünler
        </h1>
        <button onClick={() => router.push("/favorite")}>Favorilere Git</button>
      </div>
      {loading ? (
        // Data yüklenirken skeleton componentini göster
        <div className="grid grid-cols-3 gap-4">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
        // Data yüklendikten sonrada card componentini göster
        <div className="grid grid-cols-3 gap-4">
          {products?.map((product) => {
            return (
              <Card
                key={product.id}
                actionText="Favorilere Ekle"
                action={() => {
                  addToFavorites(product);
                }}
                product={product}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default HomePage;
