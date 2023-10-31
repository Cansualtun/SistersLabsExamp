import { fetchPhoto } from "@/api";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AlbumCard from "@/components/Card";

const PhotoDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (id) {
      const getDetail = async () => {
        const photoDet = await fetchPhoto(id);
        setPhoto(photoDet);
      };
      getDetail();
    }
  }, [id]);
  if (!photo) {
    return <div className="flex items-center justify-center">Loading...</div>;
  }
  return (
    <div className="flex items-center justify-center  min-h-screen">
      <AlbumCard photo={photo} />
    </div>
  );
};

export default PhotoDetail;
