import React, {useState} from "react";
import styled from "styled-components";
import {Title} from "components/shared/logo";
import TaskForm from "components/shared/task-form";
import BucketForm from "components/shared/bucket-form";
import History from "manager/history";

const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 10px 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
`;

const HeaderLogo = styled(Title)`
  font-size: 26px;
  i {
    font-size: 10px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

const Link = styled.div`
  color: red;
  opacity: 0.6;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
  font-weight: 600;
`;

export const CreateButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  color: white;
  outline: none;
  cursor: pointer;
  background-color: #017de8;
  font-size: 14px;
`;

const Logout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 14px;
  color: red;
  cursor: pointer;
  font-weight: 600;
`;

const NavigationHeader = ({logout}) => {
  const [openAddNewTaskForm, setOpenAddNewTaskForm] = useState(false);
  const [openAddNewBucketForm, setOpenAddNewBucketForm] = useState(false);
  return (
    <>
      <Container>
        <LeftContainer>
          <HeaderLogo>
            Task<i>bo</i>
          </HeaderLogo>
          <Link onClick={() => History.push("/task")}>Taks</Link>
          <Link onClick={() => History.push("/bucket")}>Buckets</Link>
          <CreateButton onClick={() => setOpenAddNewTaskForm(true)}>
            Create Task
          </CreateButton>
          <CreateButton onClick={() => setOpenAddNewBucketForm(true)}>
            Create Bucket
          </CreateButton>
        </LeftContainer>

        <Logout onClick={logout}>Logout</Logout>
      </Container>

      {openAddNewTaskForm && (
        <TaskForm closeTaskForm={() => setOpenAddNewTaskForm(false)} />
      )}
      {openAddNewBucketForm && (
        <BucketForm closeBucketForm={() => setOpenAddNewBucketForm(false)} />
      )}
    </>
  );
};

export default NavigationHeader;
