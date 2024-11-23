import {
  Badge,
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { NotificationIcon } from "../../../assets/svg/NotificationIcon";

const Notify = () => {
  return (
    <div>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button aria-label="products cart notifications" variant="light">
            <Badge color="danger" content={5} shape="circle">
              <NotificationIcon className="fill-current" size={30} />
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
            <p>Hello</p>
            <Divider />
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Notify;
