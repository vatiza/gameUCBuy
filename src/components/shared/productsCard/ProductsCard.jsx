import { Card, CardBody, Image } from "@nextui-org/react";
import pubgImg from "../../../assets/img/PUBG-Mobile.webp";

const ProductsCard = () => {
  return (
    <Card className="grid grid-cols-2 lg:grid-cols-4 p-3 gap-2.5">
      <CardBody className="overflow-visible p-0 ">
        <Image
          alt="Card background"
          className="object-cover rounded-xl relative"
          src={pubgImg}
          width={277}
        />
        <div className="absolute  bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
          44% Discount
        </div>
        <div className="text-center mt-2">
          <h1>PUBG Mobile Global UC</h1>
          <p className="text-xs">75.00৳ – 20,900.00৳ </p>
        </div>
      </CardBody>
      <CardBody className="overflow-visible p-0 ">
        <Image
          alt="Card background"
          className="object-cover rounded-xl relative"
          src={pubgImg}
          width={277}
        />
        <div className="absolute  bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
          44% Discount
        </div>
        <div className="text-center mt-2">
          <h1>PUBG Mobile Global UC</h1>
          <p className="text-xs">75.00৳ – 20,900.00৳ </p>
        </div>
      </CardBody>
      <CardBody className="overflow-visible p-0 ">
        <Image
          alt="Card background"
          className="object-cover rounded-xl relative"
          src={pubgImg}
          width={277}
        />
        <div className="absolute  bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
          44% Discount
        </div>
        <div className="text-center mt-2">
          <h1>PUBG Mobile Global UC</h1>
          <p className="text-xs">75.00৳ – 20,900.00৳ </p>
        </div>
      </CardBody>
      <CardBody className="overflow-visible p-0 ">
        <Image
          alt="Card background"
          className="object-cover rounded-xl relative"
          src={pubgImg}
          width={277}
        />
        <div className="absolute  bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
          44% Discount
        </div>
        <div className="text-center mt-2">
          <h1>PUBG Mobile Global UC</h1>
          <p className="text-xs">75.00৳ – 20,900.00৳ </p>
        </div>
      </CardBody>
      <CardBody className="overflow-visible p-0 ">
        <Image
          alt="Card background"
          className="object-cover rounded-xl relative"
          src={pubgImg}
          width={277}
        />
        <div className="absolute  bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
          44% Discount
        </div>
        <div className="text-center mt-2">
          <h1>PUBG Mobile Global UC</h1>
          <p className="text-xs">75.00৳ – 20,900.00৳ </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductsCard;
