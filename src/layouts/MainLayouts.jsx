import { Outlet } from "react-router-dom";
import Nav from "../components/shared/navbar/Navbar";

const MainLayouts = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default MainLayouts;
