import React, { useState } from "react";
import styled from "styled-components";
import { ReduxEvent } from "../../../../constants";
import { useDispatch } from "react-redux";
import { dispatchAction } from "../../../../utility";
import History from "../../../../manager/history";
import LoginForm from "./login-form";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginController = () => {
  const dispatch = useDispatch();
  const triggerDispatchAction = (reduxEvent, data) =>
    dispatch(dispatchAction(reduxEvent, data || ""));
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const onSubmitClick = () => {
    triggerDispatchAction(ReduxEvent.SHOW_LOADER, {});
    triggerDispatchAction(ReduxEvent.LOGGED_IN, {});
  };
  const loginFormProps = { userData, setUserData, onSubmitClick };
  return (
    <Container>
      <LoginForm {...loginFormProps} />
    </Container>
  );
};

export default LoginController;
