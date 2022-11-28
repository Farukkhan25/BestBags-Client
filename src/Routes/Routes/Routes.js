import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllBuyers from "../../Pages/Dashboard/AdminMenu/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AdminMenu/AllSellers";
import ReportedItems from "../../Pages/Dashboard/AdminMenu/ReportedItems";
import MyBooking from "../../Pages/Dashboard/MyBooking";
import AddProduct from "../../Pages/Dashboard/SellerMenuItems/AddProduct";
import MyBuyers from "../../Pages/Dashboard/SellerMenuItems/MyBuyers";
import MyProducts from "../../Pages/Dashboard/SellerMenuItems/MyProducts";
import Welcome from "../../Pages/Dashboard/Welcome";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/categories/:id",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/categories/${params.id}`),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      // <PrivateRoute>
      <DashboardLayout></DashboardLayout>
      // </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Welcome></Welcome>,
      },
      {
        path: "my-orders",
        element: <MyBooking></MyBooking>,
      },
      {
        path: "my-buyers",
        element: <MyBuyers></MyBuyers>,
      },
      {
        path: "add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "my-products",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "all-sellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "all-buyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "reported-items",
        element: <ReportedItems></ReportedItems>,
      },
    ],
  },
]);

export default router;
