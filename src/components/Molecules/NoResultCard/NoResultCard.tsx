import type { NoResultCardProps } from "./NoResultCard.interfaces";
import { Container } from "./NoResultCard.styles";

const NoResultCard: React.FC<NoResultCardProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default NoResultCard;
