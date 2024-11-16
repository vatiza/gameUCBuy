import { Button, Divider, Image, Input } from "@nextui-org/react";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";

const ProductsDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [product] = useLoaderData();
  const { title, image, description, rating, uc, price, _id } = product;
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [orderUc, setOrderUc] = useState(null);
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const navigate = useNavigate();

  if (!product) {
    return <div>Loading...</div>;
  }
  const handleSelectUc = (ucItem, ucPrice) => {
    setSelectedPrice(ucPrice);
    setOrderUc(ucItem);
  };
  const onSubmit = (data) => {
    const playerId = data.playerId;
    const playerName = data.playerName;
    if (!orderUc || selectedPrice === null) {
      toast.error("Please select UC");
    } else if (!user) {
      console.log("User not logged in");

      Swal.fire({
        title: "You must be log in",
        showCancelButton: true,
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {
            state: {
              from: `/shop/${_id}`,
            },
          });
        }
      });
    } else {
      const cartItems = {
        email: user?.email,
        title: title,
        productId: _id,
        price: selectedPrice,
        uc: orderUc,
        image: image,
        playerId: playerId,
        playerName: playerName,
      };
      axiosSecure.post("/carts", cartItems).then((res) => {
        if (res.data.insertedId) {
          console.log("Item added to cart");
          toast.success("Product added to cart");
          refetch();
        }
      });
    }
  };

  return (
    <div className="">
      <Helmet>
        <title>Buy {title}</title>
      </Helmet>
      <div className="grid grid-flow-row lg:grid-cols-2 gap-2">
        <div className="">
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
            <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("playerId", { required: true })}
                />
                {errors.playerId && (
                  <p className="text-red-500">This field is required</p>
                )}
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
                  {...register("playerName", { required: true })}
                />
                {errors.playerName && (
                  <p className="text-red-500">This field is required</p>
                )}
              </div>
              <div className="flex  justify-evenly mt-5">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add To Cart
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Buy Now
                </button>
              </div>
            </form>
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
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ProductsDetails;
