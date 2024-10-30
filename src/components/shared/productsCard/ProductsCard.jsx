import { Card, CardBody, Image } from "@nextui-org/react";

const ProductsCard = ({ product }) => {
  const { title, price, image } = product;
  return (
    <Card>
      <CardBody className="overflow-visible">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width="100%"
          height="200px"
        />
        <div className="absolute  bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
          44% Discount
        </div>
        <div className="text-center mt-2">
          <h1>{title}</h1>
          <p className="text-xs">{price}৳ </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductsCard;
