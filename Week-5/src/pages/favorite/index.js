import Card from "@/components/Card";

const Favorite = () => {
  return (
    <div>
      <h1 className="text-xl font-bold my-4">Favori Ürünlerim</h1>
      <div className="grid grid-col-3 gap-4">
        <Card actionText="Favorilerden Kaldır" />
      </div>
    </div>
  );
};
export default Favorite;
