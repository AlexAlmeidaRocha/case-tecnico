import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import type { User } from "../../../store/user.interfaces";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { selectUser } from "../../../store/usersSlice";
import UserDetail from "./UserDetail";
import { useFavorites } from "../../../hooks/useFavorites";

const UserDetailWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    if (location.state?.user) {
      dispatch(selectUser(location.state.user as User));
      return;
    }

    if (id && users.length > 0) {
      const user = users.find((u) => u.id === parseInt(id));
      if (user) {
        dispatch(selectUser(user));
      }
    }
  }, [id, location.state, users, dispatch]);

  return <UserDetail isFavorite={isFavorite} toggleFavorite={toggleFavorite} />;
};

export default UserDetailWrapper;
