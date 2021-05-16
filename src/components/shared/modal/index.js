import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #000000;
  opacity: 0.4;
  z-index: 10000000;
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 12px;
  color: red;
  justify-content: flex-end;
`;

const ModalBody = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  max-height: calc(100vh - 80px);
  width: 100%;
  max-width: 600px;
`;

const Children = styled.div`
  margin-top: 20px;
`;

const Modal = ({ children, closeAction }) => (
  <Container>
    <ModalBody>
      <Header onClick={closeAction}>Close</Header>
      <Children>{children}</Children>
    </ModalBody>
  </Container>
);

export default Modal;
