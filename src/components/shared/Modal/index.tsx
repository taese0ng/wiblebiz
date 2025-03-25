import styled from "@emotion/styled";
import { ReactNode, useEffect } from "react";
import closeIcon from "~/assets/ic_close.svg";

interface Props {
  isOpen: boolean;
  onClose: VoidFunction;
  title?: string;
  children: ReactNode;
}

function Modal({ isOpen, title, onClose, children }: Props) {
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      const document = window.document;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Container>
      <Dim />
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>

          <CloseButton onClick={handleClose}>
            <img src={closeIcon} alt="닫기" />
          </CloseButton>
        </ModalHeader>

        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </Container>
  );
}

export default Modal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.4;
`;

const ModalContainer = styled.div`
  overflow: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  padding: 28px;
  border-radius: 10px;
  min-width: 320px;
  max-width: calc(100% - 96px);
  max-height: calc(100% - 96px);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray700};
`;

const ModalContent = styled.div``;

const ModalTitle = styled.h4`
  font-size: 22px;
  font-weight: 800;
  margin: 0;
`;

const CloseButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 25px;
  height: 25px;

  img {
    width: 100%;
    height: 100%;
  }
`;
