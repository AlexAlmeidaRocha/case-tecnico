import React from "react";
import UserDetail from "./UserDetail";
import { useFavorites } from "../../../hooks/useFavorites";
import type { UserDetailWrapperProps } from "./UserDetail.interfaces";

const UserDetailWrapper: React.FC<UserDetailWrapperProps> = ({ user }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <UserDetail
      user={user}
      toggleFavorite={toggleFavorite}
      isFavorite={isFavorite}
    />
  );
};

export default UserDetailWrapper;
