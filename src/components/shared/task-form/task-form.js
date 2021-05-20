import React from "react";
import DatePicker from "react-date-picker";
import styled, {css} from "styled-components";
import Modal from "../modal";
import {TaskPriority, TaskStatus} from "constant";

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 15px;
  padding: 15px;
`;

const InputText = styled.div`
  font-size: 14px;
`;

const InputBoxCss = css`
  font-size: 14px;
  padding: 5px 10px;
  outline: none;
  border-radius: 4px;
  color: #000000;
  border: none;
  background-color: aliceblue;
`;

const InputBox = styled.input`
  ${InputBoxCss}
`;

const TextBox = styled.textarea`
  ${InputBoxCss}
  resize: none;
  height: 100px;
`;

const InputDate = styled(DatePicker)`
  ${InputBoxCss}
  .react-date-picker__wrapper {
    border: none;
  }
`;

const Selector = styled.select`
  ${InputBoxCss}
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const Error = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin: 13px 0;
  padding: 10px 20px;
  border-radius: 4px;
  color: #ffffff;
  border: none;
  background-color: red;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  color: white;
  outline: none;
  cursor: pointer;
  background-color: ${({color}) => color || "#017de8"};
  font-size: 14px;
  ${({disabled}) =>
    disabled &&
    css`
      opacity: 0.2;
      cursor: not-allowed;
    `}
`;

const TaskForm = ({
  closeAction,
  saveAction,
  deleteAction,
  formData,
  setFormData,
  error,
}) => (
  <Modal
    children={
      <FormBody>
        <InputText>Title</InputText>
        <InputBox
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
        />
        <InputText>Description</InputText>
        <TextBox
          value={formData.description}
          onChange={(e) =>
            setFormData({...formData, description: e.target.value})
          }
        />
        <InputText>Priority</InputText>
        <Selector
          value={formData.priority}
          onChange={(e) => setFormData({...formData, priority: e.target.value})}
        >
          <option value={TaskPriority.HIGH}>{TaskPriority.HIGH}</option>
          <option value={TaskPriority.MEDIUM}>{TaskPriority.MEDIUM}</option>
          <option value={TaskPriority.NORMAL}>{TaskPriority.NORMAL}</option>
        </Selector>
        <InputText>Deadline</InputText>
        <InputDate
          calendarIcon={null}
          clearIcon={null}
          // minDate={new Date()}
          value={formData.deadline}
          onChange={(date) => setFormData({...formData, deadline: date})}
        />
        <InputText>Status</InputText>
        <Selector
          value={formData.status}
          onChange={(e) => setFormData({...formData, status: e.target.value})}
        >
          <option value={TaskStatus.COMPLETED}>{TaskStatus.COMPLETED}</option>
          <option value={TaskStatus.INCOMPLETE}>{TaskStatus.INCOMPLETE}</option>
        </Selector>
        {error && <Error>{error}</Error>}
        <ButtonContainer>
          <Button disabled={!formData.title} onClick={saveAction}>
            {formData.taskId ? "Save" : "Create"}
          </Button>
          {formData.taskId && (
            <Button color="red" onClick={deleteAction}>
              Delete
            </Button>
          )}
        </ButtonContainer>
      </FormBody>
    }
    closeAction={closeAction}
  />
);

export default TaskForm;
