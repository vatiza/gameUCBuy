import { Button, Divider, Input, Textarea, Tooltip } from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";
import { DeleteIcon } from "../../assets/svg/DeleteIcon";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const CheckOutPage = () => {
  const [cartList, refetch, loading] = useCart();

  const axiosSecure = useAxiosSecure();
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
    <div className="bg-slate-100">
      <div className="text-center bg-blue-700 p-6 rounded-md">
        <h1 className="uppercase text-4xl  text-white font-semibold">
          Checkout
        </h1>
      </div>
      <div className="grid grid-flow-row lg:grid-cols-2 gap-7 px-5 mt-5">
        <div className="p-5 bg-white rounded-lg">
          <h1 className="text-center text-3xl">Billing Details</h1>
          <form>
            <div className="mt-10">
              <Input
                type="text"
                label="Full Name *"
                placeholder="Name"
                labelPlacement="outside"
              />
              <Input
                className="pt-5"
                type="text"
                label="Phone *
"
                placeholder="Phone Number"
                labelPlacement="outside"
              />
              <Input
                className="pt-5"
                type="text"
                label="Emali Address *"
                placeholder="Email"
                labelPlacement="outside"
              />
              <Textarea
                className="pt-5"
                label="Note (optional)"
                labelPlacement="outside"
                placeholder="Notes (optional)"
              />
            </div>
          </form>
        </div>
        <div className="p-5 rounded-lg bg-white">
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
              {cartList.map((item) => (
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
                <p>{cartList.reduce((acc, curr) => acc + curr.price, 0)}৳</p>
              </div>
              <Divider className="my-2" />
            </>
          )}
        </div>
      </div>
      <div className="bg-white lg:w-1/2 m-5 p-5 rounded-lg mb-10">
        <h1 className="text-center">Payment Information</h1>
        <Input
          className="pt-10 lg:w-1/2"
          type="text"
          label="Bkash/Nagad/Rocket Number*"
          placeholder="Bkash/Nagad/Rocket Number"
          labelPlacement="outside"
        />
        <Input
          className="pt-5 lg:w-1/2"
          type="text"
          label="Transaction ID *"
          placeholder="Transaction ID"
          labelPlacement="outside"
        />
        <p className="mt-5">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our{" "}
          <span className="font-semibold cursor-pointer">privacy policy</span>.
        </p>
        <Button color="primary" className="mt-5 w-1/2" type="submit">
          Confrim
        </Button>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default CheckOutPage;
