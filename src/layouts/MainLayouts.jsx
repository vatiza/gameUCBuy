import { Outlet } from "react-router-dom";
import Nav from "../components/shared/navbar/Navbar";

const MainLayouts = () => {
  return (
    <div>
      <Nav />
      <div className="mx-3">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayouts;
