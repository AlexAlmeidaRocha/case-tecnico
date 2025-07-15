import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User, UsersState } from "./user.interfaces";

const loadFavoritesFromStorage = (): User[] => {
  try {
    const storedFavorites = localStorage.getItem("userFavorites");
    if (storedFavorites) {
      const parsed = JSON.parse(storedFavorites);
      if (parsed && typeof parsed === "object" && "value" in parsed) {
        return Array.isArray(parsed.value) ? parsed.value : [];
      }
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch (error) {
    console.warn("Failed to load favorites from localStorage:", error);
  }
  return [];
};

const initialState: UsersState = {
  users: [],
  selectedUser: null,
  favorites: loadFavoritesFromStorage(),
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action: PayloadAction<User[]>) => {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    selectUser: (state, action: PayloadAction<User>) => {
      state.selectedUser = action.payload;
    },
    clearSelectedUser: (state) => {
      state.selectedUser = null;
    },

    addToFavorites: (state, action: PayloadAction<User>) => {
      const isAlreadyFavorite = state.favorites.some(
        (fav) => fav.id === action.payload.id
      );
      if (!isAlreadyFavorite) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (fav) => fav.id !== action.payload
      );
    },
  },
});

export const {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  selectUser,
  clearSelectedUser,
  addToFavorites,
  removeFromFavorites,
} = usersSlice.actions;

export default usersSlice.reducer;
