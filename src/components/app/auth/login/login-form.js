import React from "react";
import {
  Page,
  Container,
  Title,
  InputBox,
  SubmitButton,
  Link,
  Error,
} from "../shared";
import History from "manager/history";

const LoginForm = ({
  userData: { emailId, password },
  setUserData,
  error,
  onSubmitClick,
}) => (
  <Page>
    <Container>
      <Title>
        Task<i>bo</i>
      </Title>
      <InputBox
        type="email"
        value={emailId}
        placeholder="Email-id"
        onChange={({ target }) =>
          setUserData({ password, emailId: target.value })
        }
      />
      <InputBox
        type="password"
        value={password}
        placeholder={"Password"}
        onChange={({ target }) =>
          setUserData({ emailId, password: target.value })
        }
      />

      {error && <Error>Error : {error}</Error>}

      <SubmitButton onClick={onSubmitClick} disabled={!emailId || !password}>
        Login
      </SubmitButton>
      <Link onClick={() => History.push("/sign-up")}>
        Don't have account ? sign-up
      </Link>
    </Container>
  </Page>
);

export default LoginForm;
