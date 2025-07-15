import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { fetchUsersRequest } from "../../../store/usersSlice";
import type { User } from "../../../store/user.interfaces";
import {
  UserGrid,
  NavigationContainer,
  Container,
  SearchContainer,
  ButtonGroup,
  LoadingContainer,
} from "./UserList.styles";
import LoadingSpinner from "../../Atoms/LoadingSpinner/LoadingSpinner";
import Button from "../../Atoms/Button/Button";
import SearchInput from "../../Atoms/SearchInput/SearchInput";
import Text from "../../Atoms/Text/Text";
import UserCard from "../../Molecules/UserCard/UserCard";
import NoResultCard from "../../Molecules/NoResultCard/NoResultCard";
import { useFavorites } from "../../../hooks/useFavorites";

const UserList: React.FC = () => {
  const [filterUsers, setFilterUsers] = React.useState<User[]>([]);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { users, loading, error } = useAppSelector((state) => state.users);
  const { toggleFavorite, isFavorite, favoritesLength } = useFavorites();

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    setFilterUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const filteredUsers = searchTerm ? filterUsers : users;

  const handleUserClick = (user: User) => {
    navigate(`/user/${user.id}`, { state: { user } });
  };

  const handleFavoriteToggle = (user: User, event: React.MouseEvent) => {
    event.stopPropagation();
    toggleFavorite(user);
  };

  if (loading) {
    return (
      <Container>
        <LoadingContainer>
          <LoadingSpinner>Carregando usuários...</LoadingSpinner>
        </LoadingContainer>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Text type="h2" error>
          Erro: {error}
        </Text>
      </Container>
    );
  }

  return (
    <Container>
      <NavigationContainer>
        <SearchContainer>
          <SearchInput
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Pesquisar pelo nome..."
          />
        </SearchContainer>
        <ButtonGroup>
          <Button variant="secondary" onClick={() => navigate("/favorites")}>
            Ver Favoritos ({favoritesLength})
          </Button>
        </ButtonGroup>
      </NavigationContainer>

      {filteredUsers.length === 0 ? (
        <NoResultCard>
          <Text type="h3" color="white">
            {searchTerm
              ? "Nenhum usuário encontrado"
              : "Nenhum usuário disponível"}
          </Text>
        </NoResultCard>
      ) : (
        <UserGrid>
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              isFavorite={isFavorite(user.id)}
              onClick={() => handleUserClick(user)}
              onFavoriteToggle={(event) => handleFavoriteToggle(user, event)}
            />
          ))}
        </UserGrid>
      )}
    </Container>
  );
};

export default UserList;
