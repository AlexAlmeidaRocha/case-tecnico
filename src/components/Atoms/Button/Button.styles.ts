import styled from "styled-components";

export const StyledButton = styled.button<{
  $variant?: "primary" | "secondary" | "danger";
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  border: none;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.25px;
  min-height: 48px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  ${(props) => {
    switch (props.$variant) {
      case "primary":
        return `
          background: linear-gradient(135deg, #3498db, #2980b9);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 20px rgba(52, 152, 219, 0.3);
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(52, 152, 219, 0.4);
            background: linear-gradient(135deg, #2980b9, #3498db);
          }
          
          &:active {
            transform: translateY(0);
          }
        `;
      case "danger":
        return `
          background: linear-gradient(135deg, #e74c3c, #c0392b);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 20px rgba(231, 76, 60, 0.3);
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(231, 76, 60, 0.4);
            background: linear-gradient(135deg, #c0392b, #e74c3c);
          }
          
          &:active {
            transform: translateY(0);
          }
        `;
      default:
        return `
          background: rgba(255, 255, 255, 0.9);
          color: #2c3e50;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            background: rgba(255, 255, 255, 1);
          }
          
          &:active {
            transform: translateY(0);
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;

    &:hover::before {
      left: -100%;
    }
  }

  &:focus-visible {
    outline: 2px solid rgba(52, 152, 219, 0.8);
    outline-offset: 2px;
  }
`;
