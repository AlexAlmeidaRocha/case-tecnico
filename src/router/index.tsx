import { createBrowserRouter } from "react-router-dom";
import UserList from "../components/Pages/UserList/UserList";
import MainLayout from "../components/Template/MainLayout/MainLayout";
import Favorites from "../components/Pages/Favorites/Favorites";

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
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
]);
