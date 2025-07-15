import type { AppDispatch } from "../../../store/store";
import type { User } from "../../../store/user.interfaces";

export interface UserDetailProps {
  user: User | null;
  favorites: User[];
  dispatch: AppDispatch;
  toggleFavorite: (user: User) => void;
  isFavorite: (userId: number) => boolean;
}
