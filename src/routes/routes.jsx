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
          fetch(`https://server-uc-shop.vercel.app/products/${params.id}`),
      },
      {
        path: "/checkout",
        element: <CheckOutPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayouts />,
    children: [
      {
        path: "myorders",
        element: <MyOrders />,
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
