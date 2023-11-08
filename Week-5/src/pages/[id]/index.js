import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import { fetchProduct } from "../api";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (id) {
      const getDetail = async () => {
        const productDetail = await fetchProduct(id);
        setProduct(productDetail);
      };
      getDetail();
    }
  }, [id]);
  return (
    <div className="flex items-center justify-center flex-col">
      <h1>{product.title} Adlı Ürünün Detayı</h1>
      <Card product={product} detailVisible={false} favoriteVisible={false} />
    </div>
  );
};

export default ProductDetail;
