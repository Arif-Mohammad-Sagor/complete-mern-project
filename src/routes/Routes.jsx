import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import { Shop } from "../pages/Shop/Shop/Shop";
import SignUp from '../pages/UserRegistration/SignUp'
import Login from "../pages/UserRegistration/Login";
import SecrectPage from "../pages/ProtectedPage/SecrectPage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import MyCart from "../pages/Dashboard/Cart/MyCart";
import Payment from "../pages/Dashboard/Payment/Payment";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItem/ManageItems";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/shop/:category",
        element: <Shop></Shop>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secrect",
        element: (
          <PrivateRoute>
            <SecrectPage></SecrectPage>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "payment",
        element: (
          <AdminRoute>
            <Payment></Payment>
          </AdminRoute>
        ),
      },
      {
        path: "allusers",
        element: <AllUser></AllUser>,
      },
      {
        path: "additem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: 'adminhome',
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'userhome',
        element:<UserHome></UserHome>
    }
    ],
  },
]);

export default router;
