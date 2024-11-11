import { Outlet } from "react-router-dom";
import Nav from "../components/shared/navbar/Navbar";
import { Divider } from "@nextui-org/react";

const AdminLayouts = () => {
  const adminPath = [
    {
      path: "./",
      name: "Dashboard",
    },
    {
      path: "./products",
      name: "Products",
    },
    {
      path: "./orders",
      name: "Orders",
    },
    {
      path: "./settings",
      name: "Settings",
    },
    {
      path: "./logout",
      name: "Logout",
    },
  ];
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-3 px-20">
        <div className="col-span-1">
          <h1>Admin Layout</h1>
          <Divider />
          {adminPath.map((path) => (
            <div key={path.path}>
              <a href={path.path}>{path.name}</a>
            </div>
          ))}
        </div>
        <div className="border h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayouts;
