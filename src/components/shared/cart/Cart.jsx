import {
  Badge,
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Tooltip,
} from "@nextui-org/react";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartIcon } from "../../../assets/svg/CartIcon";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const subTotalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handleRemoveItem = (id) => {
    console.log("Remove Item", id);
    axiosSecure.delete(`/carts/${id}`).then((res) => {
      if (res.data.deletedCount === 0) {
        refetch();
        toast.success("Removed item from cart");
      }
    });
  };
  return (
    <div>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button aria-label="products cart notifications" variant="light">
            <Badge content={cart.length} shape="circle" color="danger">
              <CartIcon size={28} />
            </Badge>
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="cart Actions" variant="flat">
          <DropdownItem
            isReadOnly
            textValue="cart"
            key="cart"
            className="h-14 gap-2"
          >
            <p className="font-semibold flex justify-between">
              Cart List <span>{cart.length}</span>
            </p>
            <Divider />
          </DropdownItem>
          {cart.map((item) => (
            <DropdownItem
              isReadOnly
              textValue="items"
              className="p-3 cursor-default "
              key={item._id}
            >
              <Link className="text-blue-700" to={`/shop/${item?.productId} `}>
                {item.title}{" "}
              </Link>
              <div className="flex items-center justify-between">
                <p className="font-semibold">
                  {item.uc} <span className="text-blue-700 ">{item.price}</span>{" "}
                  BDT
                </p>
                <Tooltip content="Remove Item">
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="text-2xl  text-danger-500 hover:text-danger-600"
                  >
                    <MdDeleteForever />
                  </button>
                </Tooltip>
              </div>

              <Divider />
            </DropdownItem>
          ))}

          <DropdownItem textValue="sub" className="mt-4 bg-blue-200">
            <div className="flex text-xl   items-center justify-between mt-2 p4 font-bold">
              <h1>Subtotal:</h1>
              <h1>
                {subTotalPrice} <span>TK</span>{" "}
              </h1>
            </div>
          </DropdownItem>
          <DropdownItem textValue="btn">
            <Button color="primary">Proceed To Checkout</Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Cart;
