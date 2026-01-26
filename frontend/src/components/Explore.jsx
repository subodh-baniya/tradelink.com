import Card from "./Card";
import { useDetail } from "../context-products/getDetail";

const Explore = () => {
  const { displayProducts } = useDetail();

  return (
    <div className="flex flex-row flex-wrap gap-4 bg-gray-100 p-7">
      {displayProducts.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Explore;
