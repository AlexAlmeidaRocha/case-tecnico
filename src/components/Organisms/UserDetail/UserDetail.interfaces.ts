import type { User } from "../../../store/user.interfaces";

export interface UserDetailProps {
  user: User | null;
  toggleFavorite: (user: User) => void;
  isFavorite: (userId: number) => boolean;
}

export interface UserDetailWrapperProps {
  user: User | null;
}
