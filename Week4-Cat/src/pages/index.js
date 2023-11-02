import { useEffect, useState } from "react";
import { fetchCatImage } from "@/api";
import Image from "next/image";

export default function Home() {
  const [catImage, setCatImage] = useState(null);

  // useEffect(() => {
  //   async function getDogImage() {
  //     const imageUrl = await fetchDogImage();
  //     setCatImage(imageUrl);
  //   }

  //   getDogImage();
  // }, []);
  // Her Butona basıldığında yeni bir kedi resmi getirmek için fonksiyonu useEffect içinde çağırmayacağız
  const getCatImage = async () => {
    const imageUrl = await fetchCatImage();
    setCatImage(imageUrl);
  };
  useEffect(() => {
    getCatImage();
  }, []);
  return (
    <div>
      <h1 className="flex justify-center align-center">Random Cat Image</h1>
      {catImage ? (
        <Image src={catImage} alt="Dog" width="500" height={500} />
      ) : (
        <p>Loading...</p>
      )}
      <div className="flex align-center justify-center pt-2">
        <button
          onClick={getCatImage}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Random Image
        </button>
      </div>
    </div>
  );
}
