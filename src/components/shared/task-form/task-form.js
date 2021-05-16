import React from "react";
import styled from "styled-components";
import Modal from "./modal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const InputBox = styled.input`
  font-size: 14px;
  width: 100%;
  padding: 5px 10px;
  outline: none;
  border-radius: 4px;
  color: #000000;
  border: none;
  background-color: aliceblue;
`;

const TextBox = styled.textarea`
  font-size: 14px;
  width: 100%;
  padding: 5px 10px;
  outline: none;
  border-radius: 4px;
  color: #000000;
  border: none;
  background-color: aliceblue;
`;

const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  color: white;
  outline: none;
  cursor: pointer;
  background-color: ${({ color }) => color || "#017de8"};
  font-size: 14px;
`;

const TaskForm = ({ closeAction, saveAction, deleteAction, isForCreate }) => (
  <Container>
    <Modal
      children={
        <>
          <InputBox placeholder="Title" />
          <TextBox placeholder="Description" />
          <ButtonContainer>
            <Button onClick={saveAction}>
              {isForCreate ? "Create" : "Save"}
            </Button>
            <Button color="red" onClick={deleteAction}>
              Delete
            </Button>
          </ButtonContainer>
        </>
      }
      closeAction={closeAction}
    />
  </Container>
);

export default TaskForm;
