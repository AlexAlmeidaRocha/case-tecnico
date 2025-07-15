import Text from "../../Atoms/Text/Text";
import type { InfoCardProps } from "./InfoCard.interfaces";
import { Container } from "./InfoCard.styles";

const InfoCard: React.FC<InfoCardProps> = ({ label, value }) => {
  return (
    <Container>
      <Text type="label">{label}</Text>
      <Text type="span" color="info">
        {value}
      </Text>
    </Container>
  );
};

export default InfoCard;
