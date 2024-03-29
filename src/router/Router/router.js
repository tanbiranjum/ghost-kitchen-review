import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddKitchen from "../../pages/AddKitchen/AddKitchen";
import Blog from "../../pages/Blog/Blog";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Kitchen from "../../pages/Kitchen/Kitchen";
import KitchenView from "../../pages/KitchenView/KitchenView";
import Login from "../../pages/Login/Login";
import MyReview from "../../pages/MyReview/MyReview";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/kitchen",
        element: <Kitchen />,
      },
      {
        path: "/kitchen/:id",
        element: <KitchenView />,
        loader: async ({ params }) => {
          return fetch(
            `https://ghost-kitchen-server.vercel.app/api/v1/kitchens/${params.id}`
          );
        },
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <MyReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-kitchen",
        element: (
          <PrivateRoute>
            <AddKitchen />
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
