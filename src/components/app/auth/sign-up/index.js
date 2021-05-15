import React, { useState } from "react";
import styled from "styled-components";
import { ReduxEvent } from "constant";
import { useDispatch } from "react-redux";
import { dispatchAction } from "utility";
import { signUp } from "services/firebase";
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
  const onSubmitClick = async () => {
    triggerDispatchAction(ReduxEvent.SHOW_LOADER);
    let response = await signUp(userData.emailId, userData.password).catch(
      (err) => console.log("err ===> ", err)
    );
    triggerDispatchAction(ReduxEvent.HIDE_LOADER);
  };
  const loginFormProps = { userData, setUserData, onSubmitClick };
  return (
    <Container>
      <SignUpForm {...loginFormProps} />
    </Container>
  );
};

export default SignUpController;
