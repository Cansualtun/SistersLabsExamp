import Card from "@/components/Card";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const router = useRouter();
  // Local storagedaki datalara erişmiş oldum
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
    setFavorites(savedFavorites);
    console.log(savedFavorites, "favoriler");
  }, []);

  // Local Storagedan favorileri silecek fonksiyon
  const removeFromFavorites = (productToRemove) => {
    const updatedFavorites = favorites.filter(
      (product) => product.id !== productToRemove.id
    );
    setFavorites(updatedFavorites);
    toast.success("Ürün başarıyla favorilerden kaldırıldı");
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
  return (
    <div>
      <h1 className="text-xl font-bold my-4">Favori Ürünlerim</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <Card
              action={() => removeFromFavorites(product)}
              key={product.id}
              actionText="Favorilerden Kaldır"
              product={product}
              detailAction={() => router.push(`${product.id}`)}
            />
          ))
        ) : (
          <p>Favori Ürününüz Bulunmamaktadır!</p>
        )}
      </div>
    </div>
  );
};
export default Favorite;
