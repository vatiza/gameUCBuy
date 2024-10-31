import { Button, Divider, Image, Input } from "@nextui-org/react";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ProductsDetails = () => {
  const [product] = useLoaderData();
  const { title, image, description, rating, uc } = product;
  const [selectedPrice, setSelectedPrice] = useState(null);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-flow-row lg:grid-cols-2 gap-2">
      <div>
        <Image src={image} />
      </div>
      <div>
        <h1 className="text-xl lg:text-2xl">{title}</h1>
        <p>{description}</p>
        <div className="flex items-center">
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly></Rating>
          <span className="text-sm ml-2">({rating} out of 5)</span>
        </div>
        <div>
          {selectedPrice && (
            <p className="text-lg font-semibold mt-2">{selectedPrice}</p>
          )}
          {Object.entries(uc).map(([ucItem, ucPrice], index) => (
            <Button
              color={selectedPrice == ucPrice ? "primary" : ""}
              key={index}
              className="mx-2 border"
              size="sm"
              onClick={() =>
                setSelectedPrice(`Price for ${ucItem}: ${ucPrice}`)
              }
            >
              {ucItem}
            </Button>
          ))}
        </div>
        <div className="mt-5">
          <div>
            <label>
              Player ID <span className="text-red-500">*</span>
            </label>
            <Input
              size="md"
              type="text"
              variant="bordered"
              className="max-w-xs"
              placeholder="Enter your player ID"
              required
            />
          </div>
          <div className="mt-3">
            <label>
              Player Name <span className="text-red-500">*</span>
            </label>
            <Input
              size="md"
              type="text"
              variant="bordered"
              className="max-w-xs"
              placeholder="Enter your player Name"
              required
            />
          </div>
          <div className="flex  justify-evenly mt-5">
            <Button size="lg" color="primary">
              Att To Cart
            </Button>
            <Button size="lg" color="success">
              Buy Now
            </Button>
          </div>
          <Divider className="my-3" />
          <div className="flex justify-between">
            <p>Add to wishlist</p>
            <div className="flex items-center gap-2">
              <p>Share:</p>

              <FaFacebookF />
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
