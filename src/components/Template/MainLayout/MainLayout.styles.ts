import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

export const Header = styled.header`
  background: rgba(255, 255, 255, 0.95);
  padding: 1.5rem 2rem;
  width: 100%;
  text-align: center;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  overflow-y: auto;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
