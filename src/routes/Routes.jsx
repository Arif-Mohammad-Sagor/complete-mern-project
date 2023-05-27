import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import { Shop } from "../pages/Shop/Shop/Shop";
import SignUp from '../pages/UserRegistration/SignUp'
import Login from "../pages/UserRegistration/Login";
import SecrectPage from "../pages/ProtectedPage/SecrectPage";
import PrivateRoute from "./PrivateRoute";
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
]);

export default router;
