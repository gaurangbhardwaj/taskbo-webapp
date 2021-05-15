import React, { useState } from "react";
import styled from "styled-components";
import { ReduxEvent } from "constant";
import { useDispatch } from "react-redux";
import { dispatchAction } from "utility";
// import History from "../../../../manager/history";
import LoginForm from "./login-form";
import { logIn } from "services/firebase";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginController = () => {
  const dispatch = useDispatch();
  const triggerDispatchAction = (reduxEvent, data) =>
    dispatch(dispatchAction(reduxEvent, data || ""));
  const [userData, setUserData] = useState({
    emailId: "",
    password: "",
  });
  const [error, setError] = useState("");
  const onSubmitClick = async () => {
    setError("");
    triggerDispatchAction(ReduxEvent.SHOW_LOADER);
    let token = await logIn(userData.emailId, userData.password).catch((err) =>
      setError(err?.message || "Unable to login, please try again.")
    );
    triggerDispatchAction(ReduxEvent.HIDE_LOADER);
    if (!token) return;
    triggerDispatchAction(ReduxEvent.LOGGED_IN, {
      token: token,
      userDetails: { emailId: userData.emailId },
    });
  };
  const loginFormProps = { userData, setUserData, error, onSubmitClick };
  return (
    <Container>
      <LoginForm {...loginFormProps} />
    </Container>
  );
};

export default LoginController;
