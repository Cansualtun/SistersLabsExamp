import { fetchPhotos } from "@/api";
import { useEffect, useState } from "react";
import Link from "next/link";
import AlbumCard from "@/components/Card";

const Albums = () => {
  const [photos, setPhotos] = useState([]);
  const getPhotos = async () => {
    const allPhotos = await fetchPhotos();
    setPhotos(allPhotos);
  };

  useEffect(() => {
    getPhotos();
  }, []);
  console.log(photos, "deneme");

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {photos.slice(0, 100).map((item) => {
          return (
            <Link href={`/albums/${item.id}`} key={item.id}>
              <AlbumCard photo={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Albums;
