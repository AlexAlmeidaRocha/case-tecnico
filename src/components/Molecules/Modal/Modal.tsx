import { BiX } from "react-icons/bi";
import type { ModalProps } from "./Modal.interfaces";
import { Body, Header, ModalContent, StyledModal } from "./Modal.styles";
import Text from "../../Atoms/Text/Text";

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    <StyledModal>
      <ModalContent>
        <Header>
          <Text type="h3" id="modal-title">
            {title}
          </Text>
          <BiX size={40} onClick={onClose} />
        </Header>
        <Body>{children}</Body>
      </ModalContent>
    </StyledModal>
  );
};

export default Modal;
