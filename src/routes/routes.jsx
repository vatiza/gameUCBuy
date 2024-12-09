import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/home/Home";
import AllProducts from "../pages/allProducts/AllProducts";
import ProductsDetails from "../pages/productsDetails/ProductsDetails";
import Login from "../pages/account/login/Login";
import SignUp from "../pages/account/signup/SignUp";

import CheckOutPage from "../pages/checkoutpage/CheckOutPage";
import MyOrders from "../pages/myorders/MyOrders";
import DashboardLayouts from "../layouts/DashboardLayouts";
import AdminRoutes from "./adminRoutes";
import PrivateRoutes from "./privateRoutes";
import DashHome from "../components/dashboard/home/DashHome";
import Analytics from "../components/dashboard/analytics/Analytics";
import OrderDetails from "../pages/admin/orderDetails/orderDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <AllProducts />,
      },
      {
        path: "/shop/:id",
        element: <ProductsDetails />,
        loader: ({ params }) =>
          //
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/checkout",
        element: <CheckOutPage />,
      },
      {
        path: "myorders",
        element: (
          <PrivateRoutes>
            <MyOrders />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoutes>
        {" "}
        <DashboardLayouts />
      </AdminRoutes>
    ),
    children: [
      {
        path: "/dashboard/",
        element: (
          <AdminRoutes>
            <DashHome />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/analytics",
        element: (
          <AdminRoutes>
            {" "}
            <Analytics />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/order-details/:id",
        element: <OrderDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/orderdetails/${params.id}`),
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
export default routes;
