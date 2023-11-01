import { useEffect, useState } from "react";
import { fetchDogImage } from "@/api";
import Image from "next/image";

export default function Home() {
  const [catImage, setCatImage] = useState(null);

  useEffect(() => {
    async function getDogImage() {
      const imageUrl = await fetchDogImage();
      setCatImage(imageUrl);
    }

    getDogImage();
  }, []);
  console.log(catImage);
  return (
    <div>
      <h1>Random Cat Image</h1>
      {catImage ? (
        <Image src={catImage} alt="Dog" width="500" height={500} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
