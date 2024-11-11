import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/home/Home";
import AllProducts from "../pages/allProducts/AllProducts";
import ProductsDetails from "../pages/productsDetails/ProductsDetails";
import Login from "../pages/account/login/Login";
import SignUp from "../pages/account/signup/SignUp";
import AdminLayouts from "../layouts/AdminLayouts";
import CheckOutPage from "../pages/checkoutpage/CheckOutPage";

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
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayouts />,
    children: [
      {
        path: "/dashboard",
        element: <h1>Admin Dashbord</h1>,
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
