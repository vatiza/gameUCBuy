import {
  Badge,
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { CartIcon } from "../../../assets/svg/CartIcon";
import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart, loading] = useCart();

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
          <DropdownItem textValue="cart" key="cart" className="h-14 gap-2">
            <p className="font-semibold">Cart List</p>

            <Divider />
          </DropdownItem>

          <DropdownItem
            textValue="sub"
            className="mt-4"
            key="logout"
            color="danger"
          >
            <div className="flex items-center justify-between mt-2 ">
              <h1>Subtotal:</h1>
              <h1>570</h1>
            </div>
          </DropdownItem>
          <DropdownItem textValue="btn">
            <Button color="primary">Proceed To Checkout</Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Cart;
