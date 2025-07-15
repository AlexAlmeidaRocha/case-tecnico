import React from "react";
import type { UserCardProps } from "./UserCard.insterfaces";
import { Header, UserCardContainer, UserInfo } from "./UserCard.styles";
import { FaBuilding, FaGlobe } from "react-icons/fa";
import Text from "../../Atoms/Text/Text";
import Button from "../../Atoms/Button/Button";

const UserCard: React.FC<UserCardProps> = ({
  onClick,
  onFavoriteToggle,
  isFavorite,
  user,
}) => {
  return (
    <UserCardContainer onClick={onClick}>
      <Header>
        <Text type="h3">{user.name}</Text>
        <Button
          variant={isFavorite ? "danger" : "primary"}
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteToggle?.(e);
          }}
          title={
            isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
          }
        >
          {isFavorite ? "Remover" : "Favoritar"}
        </Button>
      </Header>

      <UserInfo>
        <Text type="p">{user.email}</Text>
        {user.website && (
          <Text type="p">
            <FaGlobe /> {user.website}
          </Text>
        )}
        <Text type="p">
          <FaBuilding /> {user.company.name}
        </Text>
      </UserInfo>
    </UserCardContainer>
  );
};

export default UserCard;
