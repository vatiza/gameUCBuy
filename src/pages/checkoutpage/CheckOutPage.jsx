import { Button, Divider, Input, Textarea, Tooltip } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { DeleteIcon } from "../../assets/svg/DeleteIcon";
import OrderModal from "../../components/modal/OrderModal";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const CheckOutPage = () => {
  const [cart, refetch, loading] = useCart();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trackingId, setTrackingId] = useState(null);

  const onSubmit = (data) => {
    const name = data.name;
    const phone = data.phone;
    const email = data.email;
    const note = data?.note;
    const paymentGateway = data.paymentgateway;
    const paymentNumber = data.paymentnumber;
    const tranasactionId = data.transactionid;
    const orderItems = {
      name: name,
      email: email,
      phone: phone,
      note: note,

      paymentGateway: paymentGateway,
      paymentNumber: paymentNumber,
      transactionId: tranasactionId,
      items: cart.map((item) => ({
        productId: item._id,
        productTitle: item.title,
        productPrice: item.price,
        uc: item.uc,
        playerId: item.playerId,
        playerName: item.playerName,
        image: item.image,
      })),
    };

    axiosSecure.post("/orders", orderItems).then((res) => {
      if (res.data.insertedId) {
        setTrackingId(res.data.insertedId);
        console.log("Order placed successfully");
        toast.success("Order placed successfully");
        setIsModalOpen(true);
      } else {
        console.log("Error placing order");
        toast.error("Error placing order");
      }
    });
  };

  const handleRemoveItem = (id) => {
    console.log("Remove Item", id);
    axiosSecure.delete(`/carts/${id}`).then((res) => {
      console.log(res);
      if (res.data.deletedCount > 0) {
        refetch();
        toast.success("Removed item from cart");
      }
    });
  };
  return (
    <div className="bg-slate-100 pb-10">
      <div className="text-center bg-blue-700 p-6 rounded-md">
        <h1 className="uppercase text-4xl  text-white font-semibold">
          Checkout
        </h1>
      </div>
      <div className="grid grid-flow-row lg:grid-cols-2 gap-7 px-5 mt-5">
        <div className="p-5 bg-white rounded-lg">
          <h1 className="text-center text-3xl">Billing Details</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-10">
              <Input
                type="text"
                label="Full Name *"
                placeholder="Name"
                labelPlacement="outside"
                {...register("name", { required: true })}
              />
              <Input
                className="pt-5"
                type="Number"
                label="Phone *
"
                {...register("phone", {
                  required: true,
                })}
                placeholder="Phone Number"
                labelPlacement="outside"
              />

              <Input
                className="pt-5"
                type="email"
                label="Emali Address *"
                placeholder="Email"
                labelPlacement="outside"
                {...register("email", {
                  required: true,
                })}
              />
              <Textarea
                {...register("note")}
                className="pt-5"
                label="Note (optional)"
                labelPlacement="outside"
                placeholder="Notes (optional)"
              />
            </div>
            <div className="mt-5">
              <h1 className="text-center py-2 text-2xl bg-blue-600 rounded-lg text-white">
                Payment Information
              </h1>

              <div className="mt-5">
                <label>Payment Method*</label> <br />
                <select
                  className=" w-auto border-2 border-blue-700 rounded-lg"
                  {...register("paymentgateway", {})}
                >
                  <option value="Bkash">Bkash</option>
                  <option value="Nagad">Nagad</option>
                  <option value="Rocket">Rocket</option>
                </select>
              </div>
              <Input
                className="pt-5 lg:w-1/2"
                type="Number"
                label="Bkash/Nagad/Rocket Number*"
                placeholder="Bkash/Nagad/Rocket Number"
                labelPlacement="outside"
                {...register("paymentnumber", {
                  required: true,
                })}
              />
              <Input
                {...register("transactionid", {
                  required: true,
                })}
                className="pt-5 lg:w-1/2"
                type="text"
                style={{ textTransform: "uppercase" }}
                label="Transaction ID *"
                placeholder="Transaction ID"
                labelPlacement="outside"
              />
              <p className="mt-5">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
                <span className="font-semibold cursor-pointer">
                  privacy policy
                </span>
                .
              </p>
            </div>
            <Button color="primary" className="w-1/2 my-5" type="submit">
              Confirm
            </Button>
          </form>
        </div>
        <div className="p-5 rounded-lg bg-white ">
          <h1 className="text-center text-3xl ">Your Order</h1>
          <div className="uppercase flex justify-between font-semibold mt-5">
            <h1>product</h1>
            <h1>Subtotal</h1>
          </div>
          <Divider className="my-2" />
          {loading ? (
            <div>
              <p>Loading...</p>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item._id}>
                  <div className="flex items-center my-3 gap-3">
                    <Tooltip content="Remove">
                      <p
                        onClick={() => handleRemoveItem(item._id)}
                        className="text-danger cursor-pointer"
                      >
                        {" "}
                        <DeleteIcon />
                      </p>
                    </Tooltip>
                    <img className="max-w-20" src={item.image} alt="" />
                    <div>
                      {" "}
                      <p>{item.title}</p>
                      <p>ID: {item.playerId}</p>
                      <p>Name: {item.playerName}</p>
                    </div>
                    <p className="ml-auto">{item.price}৳</p>
                  </div>
                </div>
              ))}
              <div className="mt-10"></div>
              <Divider className="  my-2" />
              <div className="flex justify-between font-semibold text-blue-600">
                <h1 className="text-xl ">Total</h1>
                <p>{cart.reduce((acc, curr) => acc + curr.price, 0)}৳</p>
              </div>
              <Divider className="my-2" />
            </>
          )}
        </div>
      </div>

      <OrderModal
        trackingId={trackingId}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default CheckOutPage;
