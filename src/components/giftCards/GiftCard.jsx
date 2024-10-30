import { Button, Divider } from "@nextui-org/react";
import { Link } from "react-router-dom";
import ProductsCard from "../shared/productsCard/ProductsCard";
import useProducts from "../../hooks/useProducts";

const GiftCard = () => {
  const [products, loading] = useProducts();
  const giftCards = products.filter(
    (product) => product.category === "Gift Card"
  );
  console.log(giftCards);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-4">
      <div className="text-center lg:flex justify-between">
        <h1 className="text-2xl uppercase font-bold ">Gift Cards</h1>
        <Button className="hidden lg:flex" color="primary" variant="solid">
          <Link to="/">More Products</Link>
        </Button>
      </div>
      <Divider className="my-2" />
      <div className="grid grid-cols-2 lg:grid-cols-4 p-3 gap-2.5">
        {giftCards.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
      <Button
        className="flex mx-auto lg:hidden  my-2 "
        color="primary"
        variant="solid"
      >
        <Link to="/">More Products</Link>
      </Button>
    </div>
  );
};

export default GiftCard;
