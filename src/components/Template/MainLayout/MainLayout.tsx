import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Main, Container } from "./MainLayout.styles";
import Text from "../../Atoms/Text/Text";

const MainLayout: React.FC = () => {
  return (
    <Container>
      <Header>
        <Text type="h1">Case Técnico</Text>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default MainLayout;
