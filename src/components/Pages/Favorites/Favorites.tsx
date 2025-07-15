import React from "react";
import { useNavigate } from "react-router-dom";
import {
  UserGrid,
  NavigationContainer,
  Container,
  Header,
} from "./Favorities.styles";
import { useAppDispatch } from "../../../hooks/redux";
import { selectUser } from "../../../store/usersSlice";
import Button from "../../Atoms/Button/Button";
import type { User } from "../../../store/user.interfaces";
import UserCard from "../../Molecules/UserCard/UserCard";
import Text from "../../Atoms/Text/Text";
import NoResultCard from "../../Molecules/NoResultCard/NoResultCard";
import { useFavorites } from "../../../hooks/useFavorites";

const Favorites: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { favorites, toggleFavorite, isFavorite, isEmpty } = useFavorites();

  const handleUserClick = (user: User) => {
    dispatch(selectUser(user));
    navigate(`/user/${user.id}`, { state: { user } });
  };

  const handleFavoriteToggle = (user: User, event: React.MouseEvent) => {
    event.stopPropagation();
    toggleFavorite(user);
  };

  return (
    <Container>
      <NavigationContainer>
        <Button variant="secondary" onClick={() => navigate("/")}>
          Voltar para Lista
        </Button>
      </NavigationContainer>

      <Header>
        <Text type="h1" color="white">
          Seus Favoritos
        </Text>
        <Text type="p" color="white">
          {isEmpty
            ? "Nenhum usuário favoritado ainda"
            : `${length} usuário${length > 1 ? "s" : ""} favoritado${
                length > 1 ? "s" : ""
              }`}
        </Text>
      </Header>

      {isEmpty ? (
        <NoResultCard>
          <Text type="h3" color="white">
            Nenhum favorito ainda!
          </Text>
          <Text type="p" color="white">
            Explore a lista de usuários e favorite os perfis que mais interessam
            você.
          </Text>
          <Button variant="primary" onClick={() => navigate("/")}>
            Explorar Usuários
          </Button>
        </NoResultCard>
      ) : (
        <UserGrid>
          {favorites.map((user) => (
            <UserCard
              key={user.id}
              onClick={() => handleUserClick(user)}
              onFavoriteToggle={(event) => handleFavoriteToggle(user, event)}
              user={user}
              isFavorite={isFavorite(user.id)}
            />
          ))}
        </UserGrid>
      )}
    </Container>
  );
};

export default Favorites;
