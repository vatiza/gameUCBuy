import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@nextui-org/react";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, adminLoading] = useAdmin();
  const location = useLocation();
  if (loading || adminLoading) {
    return (
      <div className=" flex justify-center items-center h-screen ">
        <Spinner />
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoutes;
