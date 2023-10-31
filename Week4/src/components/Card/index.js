import Image from "next/image";

const AlbumCard = ({ photo }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        className="w-full"
        width={500}
        height={500}
        src={photo.thumbnailUrl}
        alt="albumsphoto"
      />
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{photo.title}</p>
      </div>
    </div>
  );
};

export default AlbumCard;
