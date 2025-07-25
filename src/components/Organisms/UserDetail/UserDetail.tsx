import { Component } from "react";
import {
  Container,
  UserDetailContainer,
  UserDetailHeader,
  UserDetailSection,
  InfoGrid,
} from "./UserDetail.styles";
import type { UserDetailProps } from "./UserDetail.interfaces";
import Button from "../../Atoms/Button/Button";
import Text from "../../Atoms/Text/Text";
import InfoCard from "../../Molecules/InfoCard/InfoCard";

class UserDetail extends Component<UserDetailProps> {
  constructor(props: UserDetailProps) {
    super(props);
  }

  handleFavoriteToggle = () => {
    const { user, toggleFavorite } = this.props;
    if (!user) return;

    toggleFavorite(user);
  };

  render() {
    const { user, isFavorite } = this.props;
    const userFavorite = user ? isFavorite(user.id) : false;

    return (
      <Container>
        <UserDetailContainer>
          <UserDetailHeader>
            <Text type="h1">{user?.name}</Text>
            <Button
              variant={userFavorite ? "danger" : "primary"}
              onClick={this.handleFavoriteToggle}
            >
              {userFavorite
                ? "Remover dos Favoritos"
                : "Adicionar aos Favoritos"}
            </Button>
          </UserDetailHeader>

          <UserDetailSection>
            <Text type="h2">Informações Básicas</Text>
            <InfoGrid>
              <InfoCard label="Nome de Usuário" value={`${user?.username}`} />
              <InfoCard label="Email" value={`${user?.email}`} />
              <InfoCard label="Telefone" value={`${user?.phone}`} />
              <InfoCard label="Website" value={user?.website ?? ""} />
            </InfoGrid>
          </UserDetailSection>

          <UserDetailSection>
            <Text type="h2">Endereço</Text>
            <InfoGrid>
              <InfoCard
                label="Endereço Completo"
                value={`${user?.address.street}, ${user?.address.suite}`}
              />
              <InfoCard label="Cidade" value={user?.address.city ?? ""} />
              <InfoCard label="CEP" value={user?.address.zipcode ?? ""} />
              <InfoCard
                label="Coordenadas"
                value={`
                  ${user?.address.geo.lat ?? ""}, ${user?.address.geo.lng ?? ""}
                  `}
              />
            </InfoGrid>
          </UserDetailSection>

          <UserDetailSection>
            <Text type="h2">Empresa</Text>
            <InfoGrid>
              <InfoCard
                label="Nome da Empresa"
                value={user?.company.name ?? ""}
              />
              <InfoCard
                label="Slogan"
                value={`"${user?.company.catchPhrase ?? ""}"`}
              />
              <InfoCard
                label="Área de Atuação"
                value={user?.company.bs ?? ""}
              />
            </InfoGrid>
          </UserDetailSection>
        </UserDetailContainer>
      </Container>
    );
  }
}

export default UserDetail;
