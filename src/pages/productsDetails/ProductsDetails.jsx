import { Button, Chip, Divider, Image, Input } from "@nextui-org/react";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import FaceBookShare from "../../components/shared/facebook-share/fb-share";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const ProductsDetails = () => {
  const crrentUrl = window.location.href;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isAdmin] = useAdmin();
  const [product] = useLoaderData();
  const { title, image, description, rating, priceRange, discount, uc, _id } =
    product;
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [orderUc, setOrderUc] = useState(null);
  const { user } = useAuth();
  const ifDiscount = discount * 100;
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const discountCalculation = ((selectedPrice * discount) / 100) * 100;
  const discountedPrice = selectedPrice - discountCalculation;
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
        discount: discount,
        productId: _id,
        price: discountedPrice,
        uc: orderUc,
        image: image,
        playerId: playerId,
        playerName: playerName,
      };
      axiosSecure.post("/carts", cartItems).then((res) => {
        if (res.data.insertedId) {
          toast.success("Product added to cart");
          refetch();
        }
      });
    }
  };

  return (
    <div className="px-0 lg:px-20 mt-10">
      <Helmet>
        <title>Buy {title}</title>
      </Helmet>
      <div className="grid grid-flow-row lg:grid-cols-2 gap-6">
        <div className="relative w-full   ">
          <Image className="w-full " src={image} />
          {ifDiscount && (
            <p className="absolute top-0 z-10 bg-red-500 text-white text-xs p-2 rounded ">
              {ifDiscount}% OFF
            </p>
          )}
        </div>
        <div className="">
          <h1 className="text-xl lg:text-2xl">{title}</h1>
          <p>{description}</p>
          <div className="flex items-center ">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly></Rating>
            <span className="text-sm ml-2">({rating} out of 5)</span>
          </div>
          <div className="mt-5">
            {selectedPrice ? (
              <div className="flex items-center gap-3">
                <p
                  className={`text-lg font-semibold mt-2 ${
                    discountedPrice ? "line-through text-red-500" : ""
                  }`}
                >
                  {selectedPrice}৳
                </p>
                <span className="text-sm font-extralight text-red-600 ">
                  ({discount * 100}% OFF)
                </span>
                <p className="no-underline text-lg font-semibold mt-2">
                  {discountedPrice}৳{" "}
                </p>
              </div>
            ) : (
              <>
                <p className="text-lg font-semibold mt-2">
                  {priceRange[0]}-{priceRange[1]}৳
                </p>
              </>
            )}
            {uc.map(({ uc: ucItem, amount: ucAmount }, index) => (
              <Button
                color={selectedPrice === ucAmount ? "primary" : ""}
                key={index}
                className="mx-2 border my-2"
                size="sm"
                onClick={() => handleSelectUc(ucItem, ucAmount)}
              >
                {`${ucItem} UC - ৳ ${ucAmount}`}
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
              {isAdmin ? (
                <Chip className="my-5" color="danger">
                  You are Admin, you don&apos;t buy.
                </Chip>
              ) : (
                <div className=" mt-5">
                  <Button color="primary" type="submit">
                    Add To Cart
                  </Button>
                </div>
              )}
            </form>
            <Divider className="my-3" />
            <div className="flex justify-between">
              <p>Add to wishlist</p>
              <div>
                <FaceBookShare url={crrentUrl} />
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
