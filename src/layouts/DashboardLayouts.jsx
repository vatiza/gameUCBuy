import { Outlet } from "react-router-dom";
import Nav from "../components/shared/navbar/Navbar";

const DashboardLayouts = () => {
  return (
    <div>
      <Nav />
      <div className=" px-2 lg:px-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayouts;
