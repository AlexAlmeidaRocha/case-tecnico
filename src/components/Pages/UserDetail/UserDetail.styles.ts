import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0;
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  max-width: 1400px;
`;

export const UserDetailContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 0 1rem;
    border-radius: 20px;
  }
`;

export const UserDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(52, 152, 219, 0.1);
`;

export const UserDetailSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  gap: 1.5rem;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
