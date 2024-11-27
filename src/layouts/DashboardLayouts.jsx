import { Button } from "@nextui-org/react";
import { IoAnalytics } from "react-icons/io5";
import { MdHome, MdTravelExplore } from "react-icons/md";
import { Link, Outlet, useLocation } from "react-router-dom";
import Nav from "../components/shared/navbar/Navbar";

const DashboardLayouts = () => {
  const pathname = useLocation().pathname;
  return (
    <div>
      <Nav />
      <div className="px-2 lg:px-20 my-4">
        <h1 className="text-2xl">
          Welcome Back,{" "}
          <span className="text-3xl font-semibold text-primary-600">Admin</span>
        </h1>
        <p className="text-blue-700 text-xl ">{pathname}</p>
      </div>
      <div className="px-2 lg:px-20 grid grid-cols-6 ">
        <div className="col-span-1 mt-5 ">
          <Link to="/dashboard">
            <Button color={pathname === "/dashboard" ? "primary" : ""}>
              <MdHome />
              Home
            </Button>
          </Link>
          <Link to="/dashboard/analytics">
            <Button color={pathname === "/analytics" ? "primary" : ""}>
              <IoAnalytics />
              Analytics
            </Button>
          </Link>
          <Link to="/explore">
            <Button color={pathname === "/explore" ? "primary" : ""}>
              <MdTravelExplore />
              Explore
            </Button>
          </Link>
        </div>
        <div className="col-span-5 border p-5 rounded-lg ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
