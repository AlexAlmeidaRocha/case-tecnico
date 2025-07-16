import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(102, 126, 234, 0.3);
  backdrop-filter: blur(10px);
  z-index: 1000;
  animation: fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 2rem;
  width: 90%;
  max-width: 90%;
  max-height: 90%;
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15),
    0 8px 32px rgba(102, 126, 234, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9);
  overflow: hidden;
  transform: scale(0.9) translateY(20px);
  animation: modalAppear 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  @keyframes modalAppear {
    to {
      transform: scale(1) translateY(0);
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(102, 126, 234, 0.1);
  margin-bottom: 1.5rem;

  svg {
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    color: #2c3e50;

    &:hover {
      background: rgba(102, 126, 234, 0.1);
      transform: scale(1.1);
      color: #667eea;
    }
  }
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 1rem;
  box-sizing: border-box;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(102, 126, 234, 0.1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(102, 126, 234, 0.3);
    border-radius: 10px;
    transition: background 0.3s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(102, 126, 234, 0.5);
  }
`;
