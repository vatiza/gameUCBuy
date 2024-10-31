import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { HashLoader } from "react-spinners";
import HowToBuy from "../components/howToBuy/HowToBuy";
import Nav from "../components/shared/navbar/Navbar";

const MainLayouts = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <HashLoader color="#1d71ff" loading size={100} />
        </div>
      ) : (
        <>
          <Nav />
          <div className="mx-3">
            <Outlet />
            <HowToBuy />
          </div>
        </>
      )}
    </div>
  );
};

export default MainLayouts;
