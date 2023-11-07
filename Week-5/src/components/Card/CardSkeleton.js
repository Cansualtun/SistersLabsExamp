const CardSkeleton = () => {
  return (
    <div className="animate-pulse max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <div className="w-full h-48 bg-gray-300 object-cover object-center"></div>
      <div className="px-6 py-4">
        <div className="h-6 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <div className="h-8 bg-gray-300 rounded-full w-16"></div>
        <div className="h-8 bg-gray-400 rounded w-24"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
