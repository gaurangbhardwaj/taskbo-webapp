import React from "react";
import {
  Page,
  Container,
  Title,
  InputBox,
  SubmitButton,
  Link,
} from "../shared";
import History from "manager/history";

const SignUpForm = ({ userData, setUserData, error, onSubmitClick }) => (
  <Page>
    <Container>
      <Title>
        Task<i>bo</i>
      </Title>
      <InputBox
        value={userData?.emailId}
        placeholder="Email-id"
        onChange={({ target }) =>
          setUserData({ ...userData, emailId: target.value })
        }
      />
      <InputBox
        type="password"
        value={userData?.password}
        placeholder={"Password"}
        onChange={({ target }) =>
          setUserData({ ...userData, password: target.value })
        }
      />
      <InputBox
        type="password"
        value={userData?.confirmPassword}
        placeholder={"Re-enter password"}
        onChange={({ target }) =>
          setUserData({ ...userData, confirmPassword: target.value })
        }
      />
      <SubmitButton
        onClick={onSubmitClick}
        isDisabled={
          !userData.username ||
          !userData.password ||
          userData.password !== userData.confirmPassword
        }
      >
        Sign up
      </SubmitButton>
      <Link onClick={() => History.push("/login")}>
        Already have an account ? Login
      </Link>
    </Container>
  </Page>
);

export default SignUpForm;
