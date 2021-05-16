import React from "react";
import styled from "styled-components";
import { Title } from "components/shared/logo";

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
  width: 100%;
  max-width: 340px;
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

const NavigationHeader = ({ logout }) => (
  <Container>
    <LeftContainer>
      <HeaderLogo>
        Task<i>bo</i>
      </HeaderLogo>
      <CreateButton>Create Task</CreateButton>
      <CreateButton>Create Bucket</CreateButton>
    </LeftContainer>

    <Logout onClick={logout}>Logout</Logout>
  </Container>
);

export default NavigationHeader;
