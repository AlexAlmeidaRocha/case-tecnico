import React from "react";
import { StyledButton } from "./Button.styles";
import type { ButtonProps } from "./Button.interfaces";

const Button: React.FC<ButtonProps> = ({
  variant = "secondary",
  children,
  ...rest
}) => {
  return (
    <StyledButton $variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
