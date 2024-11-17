import {
  Avatar,
  Button,
  Chip,
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
  const menuItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Shop",
      href: "/shop",
    },
    {
      label: "PUBG",
      href: "/pubg",
    },
    {
      label: "Free Fire",
      href: "/freefire",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
  const { user, logoutUser } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(true);
  const [products, , refetch] = useProducts({ title: searchTerm });

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

        <div className="relative w-full lg:w-3/6">
          <Input
            className="w-full"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            onFocus={() => setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 150)}
          />
          {searchTerm && showResults && (
            <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1">
              {products.length > 0 ? (
                <ul>
                  {products.map((product) => (
                    <li
                      key={product._id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onMouseDown={(e) => e.preventDefault()} // Prevent blur when clicking on a product
                    >
                      <Link to={`/shop/${product._id}`}>
                        <Chip
                          variant="flat"
                          avatar={
                            <Avatar name={product.title} src={product.image} />
                          }
                        >
                          {product.title}
                        </Chip>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-4 py-2 text-gray-500">No products found</div>
              )}
            </div>
          )}
        </div>

        <div>
          <NavbarContent className="hidden sm:flex gap-4  ">
            {menuItems.map((item, index) => (
              <NavbarItem key={`${item.label}-${index}`}>
                <Link to={item.href} className="hover:font-bold">
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
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
                    <DropdownItem textValue="dashboard" key="settings">
                      <Link to="/dashboard/myorders">My Order</Link>
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
