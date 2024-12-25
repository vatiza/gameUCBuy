import { Card, CardBody, Image } from "@nextui-org/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
const ProductsCard = ({ product }) => {
  const { title, priceRange, image, rating, _id, discount } = product;
  const ifDiscount = discount * 100;

  return (
    <div>
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
            {ifDiscount && (
              <div className="absolute  bg-red-500 text-white text-xs p-2 rounded z-10">
                {ifDiscount}% OFF
              </div>
            )}
            <div className="text-center mt-2">
              <h1>{title}</h1>
              <div className="flex justify-center ">
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                <span className="text-sm ml-1">({rating} )</span>
              </div>
              <p className="text-xs">
                {priceRange[0]}-{priceRange[1]}৳{" "}
              </p>
            </div>
          </CardBody>
        </Link>
      </Card>
    </div>
  );
};

export default ProductsCard;
