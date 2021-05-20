import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  justify-content: flex-end;
`;

const Close = styled.div`
  font-size: 14px;
  color: red;
  cursor: pointer;
  font-weight: bold;
`;

const ModalBody = styled.div`
  position: fixed;
  background: white;
  width: 100%;
  max-width: 700px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 15px;
  background-color: white;
  border-radius: 10px;
`;

const Children = styled.div`
  margin-top: 20px;
  max-height: 80vh;
  overflow-y: auto;
`;

const Modal = ({children, closeAction}) => (
  <Container>
    <ModalBody>
      <Header>
        <Close onClick={closeAction}>X</Close>
      </Header>
      <Children>{children}</Children>
    </ModalBody>
  </Container>
);

export default Modal;
