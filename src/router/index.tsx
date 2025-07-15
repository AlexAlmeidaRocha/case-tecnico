import { createBrowserRouter } from "react-router-dom";
import UserList from "../components/Pages/UserList/UserList";
import MainLayout from "../components/Template/MainLayout/MainLayout";
import Favorites from "../components/Pages/Favorites/Favorites";
import UserDetailWrapper from "../components/Pages/UserDetail/UserDetailWrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <UserList />,
      },
      {
        path: "user/:id",
        element: <UserDetailWrapper />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
]);
