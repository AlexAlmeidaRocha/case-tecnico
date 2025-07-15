import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 140px);
  gap: 2rem;
`;

export const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0.5rem 0;
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;
