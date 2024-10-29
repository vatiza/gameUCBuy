import { Button, Divider } from "@nextui-org/react";
import { Link } from "react-router-dom";
import ProductsCard from "../shared/productsCard/ProductsCard";

const GameRecharge = () => {
  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <h1 className="text-2xl uppercase font-bold">Games Recharge</h1>
        <Button color="primary" variant="solid">
          <Link to="/">More Products</Link>
        </Button>
      </div>
      <Divider className="my-2" />
      <ProductsCard />
    </div>
  );
};

export default GameRecharge;
