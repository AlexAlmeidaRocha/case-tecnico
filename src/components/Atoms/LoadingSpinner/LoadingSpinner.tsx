import React from "react";
import {
  StyledLoadingSpinner,
  Spinner,
  LoadingText,
} from "./LoadingSpinner.styles";
import type { LoadingSpinnerProps } from "./LoadingSpinner.interfaces";

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  children = "Carregando...",
}) => {
  return (
    <StyledLoadingSpinner>
      <Spinner />
      <LoadingText>{children}</LoadingText>
    </StyledLoadingSpinner>
  );
};

export default LoadingSpinner;
