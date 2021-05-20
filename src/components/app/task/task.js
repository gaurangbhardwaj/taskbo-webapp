import React, {useState, useEffect} from "react";
import styled from "styled-components";
import moment from "moment";
import {TaskPriority} from "constant";

const CategoryBlockContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 30px auto;
  gap: 30px;
`;

const TablesContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

const TableHeader = styled.div`
  font-weight: 500;
  font-size: 16px;
  padding-bottom: 10px;
`;

const TableWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 100%;
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
    cursor: pointer;
  }
`;

const PriorityCell = styled.td`
  color: ${({priority}) => {
    switch (priority) {
      case TaskPriority.HIGH:
        return "red";
      case TaskPriority.MEDIUM:
        return "orange";
      case TaskPriority.NORMAL:
        return "green";
    }
  }};
`;

const GetTaskTable = ({taskData, setUpdateTaskId}) => (
  <TableWrapper>
    <Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Deadline</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {taskData?.length ? (
          <>
            {taskData.map(
              ({_id, title, description, priority, deadline, status}) => (
                <tr
                  key={_id}
                  onClick={() => {
                    setUpdateTaskId(_id);
                  }}
                >
                  <td>{title.toLowerCase()}</td>
                  <td>{description.toLowerCase()}</td>
                  <PriorityCell priority={priority}>
                    {priority.toLowerCase()}
                  </PriorityCell>
                  <td>{moment(deadline).format("DD/MM/YYYY")}</td>
                  <td>{status.toLowerCase()}</td>
                </tr>
              )
            )}
          </>
        ) : null}
      </tbody>
    </Table>
  </TableWrapper>
);

const Task = ({taskData, setUpdateTaskId}) => {
  const [tasksCategories, setTasksCategories] = useState({
    overdone: [],
    today: [],
    upcoming: [],
  });
  useEffect(() => {
    let deadline,
      currentDate = moment().format("YYYY-MM-DD"),
      category = {overdone: [], upcoming: [], today: []};
    for (const task of taskData) {
      if (!task?.deadline) continue;
      deadline = moment(task?.deadline).format("YYYY-MM-DD");
      if (moment(deadline).isBefore(currentDate)) category.overdone.push(task);
      else if (moment(deadline).isAfter(currentDate))
        category.upcoming.push(task);
      else category.today.push(task);
    }
    setTasksCategories(category);
  }, [taskData]);
  return (
    <>
      <CategoryBlockContainer>
        <TablesContainer>
          <TableHeader>Overdone tasks</TableHeader>
          <GetTaskTable
            taskData={tasksCategories.overdone}
            setUpdateTaskId={setUpdateTaskId}
          />
        </TablesContainer>
        <TablesContainer>
          <TableHeader>Upcoming tasks</TableHeader>
          <GetTaskTable
            taskData={tasksCategories.upcoming}
            setUpdateTaskId={setUpdateTaskId}
          />
        </TablesContainer>
        <TablesContainer>
          <TableHeader>Today's tasks</TableHeader>
          <GetTaskTable
            taskData={tasksCategories.today}
            setUpdateTaskId={setUpdateTaskId}
          />
        </TablesContainer>
      </CategoryBlockContainer>
    </>
  );
};

export default Task;
