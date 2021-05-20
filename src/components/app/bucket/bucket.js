import React from "react";
import styled from "styled-components";

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

const GetTaskTable = ({bucketData, setUpdateBucketId}) => (
  <TableWrapper>
    <Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {bucketData?.length ? (
          <>
            {bucketData.map(({_id, title, description}) => (
              <tr
                key={_id}
                onClick={() => {
                  setUpdateBucketId(_id);
                }}
              >
                <td>{title.toLowerCase()}</td>
                <td>{description.toLowerCase()}</td>
              </tr>
            ))}
          </>
        ) : null}
      </tbody>
    </Table>
  </TableWrapper>
);

const Task = ({bucketData, setUpdateBucketId}) => {
  return (
    <CategoryBlockContainer>
      <TablesContainer>
        <TableHeader>Overdone tasks</TableHeader>
        <GetTaskTable
          bucketData={bucketData}
          setUpdateBucketId={setUpdateBucketId}
        />
      </TablesContainer>
    </CategoryBlockContainer>
  );
};

export default Task;
