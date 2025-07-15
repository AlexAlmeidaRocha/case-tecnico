import type { User } from "../../../store/user.interfaces";

export interface UserCardProps {
  onClick?: () => void;
  className?: string;
  user: User;
  onFavoriteToggle?: (event: React.MouseEvent) => void;
  onRemoveFavorite?: (userId: number, event: React.MouseEvent) => void;
  isFavorite: boolean;
}
