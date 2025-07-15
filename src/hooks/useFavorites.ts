import { useLocalStorageArray } from "react-hooks-localstorage";
import type { User } from "../store/user.interfaces";
import { useAppDispatch } from "./redux";
import {
  addToFavorites,
  clearFavoriteUser,
  removeFromFavorites,
} from "../store/usersSlice";

export const useFavorites = () => {
  const {
    array: favorites,
    addItem,
    removeItemByValue,
    findItem,
    length,
    isEmpty,
    clearArray,
  } = useLocalStorageArray<User>("userFavorites", []);
  const dispatch = useAppDispatch();

  const addFavorites = (user: User) => {
    const isAlreadyFavorite = findItem((fav) => fav.id === user.id);
    if (!isAlreadyFavorite) {
      addItem(user);
      dispatch(addToFavorites(user));
    }
  };

  const removeFavorites = (userId: number) => {
    const userToRemove = findItem((fav) => fav.id === userId);
    if (userToRemove) {
      removeItemByValue(userToRemove);
      dispatch(removeFromFavorites(userId));
    }
  };

  const isFavorite = (userId: number) => {
    return !!findItem((fav) => fav.id === userId);
  };

  const toggleFavorite = (user: User) => {
    if (isFavorite(user.id)) {
      removeFavorites(user.id);
    } else {
      addFavorites(user);
    }
  };

  const clearFavoriteUsers = () => {
    clearArray();
    dispatch(clearFavoriteUser());
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
    clearFavoriteUsers,
    favoritesLength: length,
    isEmpty,
  };
};
