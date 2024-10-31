import { Card, CardBody, Image } from "@nextui-org/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
const ProductsCard = ({ product }) => {
  const { title, price, image, rating, _id } = product;
  return (
    <Card>
      <Link to={`/shop/${_id}`}>
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
            <div className="flex justify-center ">
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
              <span className="text-sm ml-1">({rating} )</span>
            </div>
            <p className="text-xs">{price}৳ </p>
          </div>
        </CardBody>
      </Link>
    </Card>
  );
};

export default ProductsCard;
