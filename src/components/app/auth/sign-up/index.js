import React, { useState } from "react";
import styled from "styled-components";
import { ReduxEvent } from "constant";
import { useDispatch } from "react-redux";
import { dispatchAction } from "utility";
import { signUp } from "services/firebase";
import { setDataInLocalStorage } from "manager/session-manager";
import History from "../../../../manager/history";
// import History from "../../../../manager/history";
import SignUpForm from "./sign-up-form";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SignUpController = () => {
  const dispatch = useDispatch();
  const triggerDispatchAction = (reduxEvent, data) =>
    dispatch(dispatchAction(reduxEvent, data || ""));
  const [userData, setUserData] = useState({
    emailId: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const getAuthToken = async () => {
    triggerDispatchAction(ReduxEvent.SHOW_LOADER);
    let token = await signUp(userData.emailId, userData.password).catch((err) =>
      setError(err?.message || "Unable to login, please try again.")
    );
    triggerDispatchAction(ReduxEvent.HIDE_LOADER);
    return token;
  };
  const createUserSession = (token) => {
    if (!token) return;
    setDataInLocalStorage("token", token);
    setDataInLocalStorage("user-details", { emailId: userData.emailId });
    setDataInLocalStorage("is-logged-in", true);
    triggerDispatchAction(ReduxEvent.LOGGED_IN, {
      token: token,
      userDetails: { emailId: userData.emailId },
    });
  };
  const onSubmitClick = async () => {
    setError("");
    const token = await getAuthToken();
    if (!token) return;
    createUserSession(token);
    History.push("/task");
  };
  const loginFormProps = { userData, setUserData, error, onSubmitClick };
  return (
    <Container>
      <SignUpForm {...loginFormProps} />
    </Container>
  );
};

export default SignUpController;
