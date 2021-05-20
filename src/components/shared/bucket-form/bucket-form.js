import React from "react";
import styled, {css} from "styled-components";
import moment from "moment";
import Modal from "../modal";

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

const TableWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  th,
  td {
    font-size: 14px;
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    text-transform: capitalize;
  }
  tr:hover {
    background-color: #f5f5f5;
  }
  input {
    cursor: pointer;
  }
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
  taskData,
  formData,
  setFormData,
  error,
}) => {
  console.log("taskData === > ", taskData);
  return (
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
          <InputText>Select tasks</InputText>
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <th />
                  <th>Title</th>
                  <th>Deadline</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody
                onClick={(e) => {
                  if (!e?.target?.id) return;
                  if (e.target?.checked)
                    setFormData({
                      ...formData,
                      taskIds: [...formData.taskIds, e.target.id],
                    });
                  else
                    setFormData({
                      ...formData,
                      taskIds: [...formData.taskIds].filter(
                        (taskId) => taskId !== e.target.id
                      ),
                    });
                }}
              >
                {taskData?.length ? (
                  <>
                    {taskData.map(({_id, title, deadline, status}) => (
                      <tr>
                        <td>
                          <input
                            id={_id}
                            type="checkbox"
                            checked={[...formData.taskIds].includes(_id)}
                          />
                        </td>
                        <td>{title.toLowerCase()}</td>
                        <td>{moment(deadline).format("DD/MM/YYYY")}</td>
                        <td>{status.toLowerCase()}</td>
                      </tr>
                    ))}
                  </>
                ) : null}
              </tbody>
            </Table>
          </TableWrapper>
          {error && <Error>{error}</Error>}
          <ButtonContainer>
            <Button disabled={!formData.title} onClick={saveAction}>
              {formData.bucketId ? "Save" : "Create"}
            </Button>
            {formData.bucketId && (
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
};

export default TaskForm;
