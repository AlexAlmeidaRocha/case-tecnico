import React from "react";
import { useNavigate } from "react-router-dom";
import {
  UserGrid,
  NavigationContainer,
  Container,
  Header,
} from "./Favorities.styles";
import Button from "../../Atoms/Button/Button";
import type { User } from "../../../store/user.interfaces";
import UserCard from "../../Molecules/UserCard/UserCard";
import Text from "../../Atoms/Text/Text";
import NoResultCard from "../../Molecules/NoResultCard/NoResultCard";
import { useFavorites } from "../../../hooks/useFavorites";
import Modal from "../../Molecules/Modal/Modal";
import UserDetailWrapper from "../../Organisms/UserDetail/UserDetailWrapper";

const Favorites: React.FC = () => {
  const [user, setUser] = React.useState<User | null>(null);
  const navigate = useNavigate();
  const {
    favorites,
    toggleFavorite,
    isFavorite,
    isEmpty,
    clearFavoriteUsers,
    favoritesLength,
  } = useFavorites();

  const handleUserClick = (user: User) => {
    setUser(user);
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
        <Button
          variant="danger"
          onClick={clearFavoriteUsers}
          disabled={favoritesLength === 0}
        >
          Limpar Favoritos
        </Button>
      </NavigationContainer>

      <Header>
        <Text type="h1" color="white">
          Seus Favoritos
        </Text>
        <Text type="p" color="white">
          {isEmpty
            ? "Nenhum usuário favoritado ainda"
            : `${favoritesLength} usuário${
                favoritesLength > 1 ? "s" : ""
              } favoritado${favoritesLength > 1 ? "s" : ""}`}
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

      {user?.id && (
        <Modal
          title="Detalhes do Usuário"
          onClose={() => setUser(null)}
          children={<UserDetailWrapper user={user} />}
        />
      )}
    </Container>
  );
};

export default Favorites;
