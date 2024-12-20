import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Spinner } from "@nextui-org/react";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className=" flex justify-center items-center h-screen ">
        <Spinner />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;
