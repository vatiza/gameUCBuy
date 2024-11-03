import {
  Avatar,
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Cart from "../cart/cart";
import useProducts from "../../../hooks/useProducts";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["Home", "Shop", "PUBG", "Free Fire ", "Contact"];
  const { user, logoutUser } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [products, loading, refetch] = useProducts({ title: searchTerm });
  console.log(products);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    refetch();
  };

  const handleLogout = () => {
    logoutUser().then(() => {});
  };
  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <div className="hidden lg:flex">
            <h1>Shop BD LOGO</h1>
          </div>
        </NavbarContent>
        <Input
          className=" w-full lg:w-3/6"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />

        <div>
          <div>
            <NavbarContent className="hidden sm:flex gap-4  ">
              {menuItems.map((item, index) => (
                <NavbarItem key={`${item}-${index}`}>
                  <Link className="hover:font-bold">{item}</Link>
                </NavbarItem>
              ))}
            </NavbarContent>
          </div>
        </div>
        <div className="flex items-center  gap-3">
          {user ? (
            <>
              <Cart />
            </>
          ) : (
            <></>
          )}
          <div>
            {user ? (
              <>
                {" "}
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Avatar
                      isBordered
                      as="button"
                      className="transition-transform"
                      color="secondary"
                      name="Jason Hughes"
                      size="sm"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem
                      textValue="profile"
                      key="profile"
                      className="h-14 gap-2"
                    >
                      <p className="font-semibold">Signed in as</p>
                      <p className="font-semibold">{user.email}</p>
                    </DropdownItem>
                    <DropdownItem key="settings">My Settings</DropdownItem>
                    <DropdownItem key="team_settings">
                      Team Settings
                    </DropdownItem>
                    <DropdownItem key="analytics">Analytics</DropdownItem>
                    <DropdownItem key="system">System</DropdownItem>
                    <DropdownItem key="configurations">
                      Configurations
                    </DropdownItem>
                    <DropdownItem key="help_and_feedback">
                      Help & Feedback
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => handleLogout()}
                      key="logout"
                      color="danger"
                    >
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <Link to="/login">
                    <Button color="primary">Login</Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link>{item}</Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <Divider className="my-2" />
    </>
  );
};
export default Nav;
