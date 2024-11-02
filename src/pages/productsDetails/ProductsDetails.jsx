import { Button, Divider, Image, Input } from "@nextui-org/react";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ProductsDetails = () => {
  const [product] = useLoaderData();
  const { title, image, description, rating, uc, price } = product;
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [orderUc, setOrderUc] = useState(null);

  if (!product) {
    return <div>Loading...</div>;
  }
  const handleSelectUc = (ucItem, ucPrice) => {
    setSelectedPrice(ucPrice);
    setOrderUc(ucItem);
  };

  const handleAddCart = () => {
    if (!orderUc && selectedPrice === null) {
      console.error("Please select UC or price");
    }
    console.log(orderUc, selectedPrice);
  };

  return (
    <>
      <Helmet>
        <title>Buy {title}</title>
      </Helmet>
      <div className="grid grid-flow-row lg:grid-cols-2 gap-2">
        <div>
          <Image src={image} />
        </div>
        <div>
          <h1 className="text-xl lg:text-2xl">{title}</h1>
          <p>{description}</p>
          <div className="flex items-center ">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly></Rating>
            <span className="text-sm ml-2">({rating} out of 5)</span>
          </div>
          <div className="mt-5">
            {selectedPrice ? (
              <>
                <p className="text-lg font-semibold mt-2">{selectedPrice}৳</p>
              </>
            ) : (
              <>
                <p className="text-lg font-semibold mt-2">{price}৳</p>
              </>
            )}
            {Object.entries(uc).map(([ucItem, ucPrice], index) => (
              <Button
                color={selectedPrice == ucPrice ? "primary" : ""}
                key={index}
                className="mx-2 border"
                size="sm"
                onClick={() => handleSelectUc(ucItem, ucPrice)}
              >
                {ucItem}
              </Button>
            ))}
          </div>
          <div className="mt-2 ml-2">
            {selectedPrice ? (
              <>
                <Button
                  onClick={() => setSelectedPrice(null)}
                  color="danger"
                  size="sm"
                >
                  Clear
                </Button>
              </>
            ) : (
              <></>
            )}
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
              <Button onClick={() => handleAddCart()} size="lg" color="primary">
                Add To Cart
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
    </>
  );
};

export default ProductsDetails;
