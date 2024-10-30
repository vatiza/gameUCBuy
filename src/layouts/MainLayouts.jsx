import { Outlet } from "react-router-dom";
import Nav from "../components/shared/navbar/Navbar";
import HowToBuy from "../components/howToBuy/HowToBuy";

const MainLayouts = () => {
  return (
    <div>
      <Nav />
      <div className="mx-3">
        <Outlet />
        <HowToBuy />
      </div>
    </div>
  );
};

export default MainLayouts;
