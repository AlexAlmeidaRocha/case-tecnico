import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.25rem 1rem 3rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  color: #2c3e50;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: rgba(52, 152, 219, 0.6);
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15),
      0 0 0 3px rgba(52, 152, 219, 0.1);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: rgba(44, 62, 80, 0.6);
    font-weight: 400;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(44, 62, 80, 0.6);
  font-size: 1.2rem;
  pointer-events: none;
  transition: color 0.3s ease;

  ${SearchContainer}:focus-within & {
    color: #3498db;
  }
`;
