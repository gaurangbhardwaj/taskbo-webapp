import styled, { css } from "styled-components";
import Logo from "components/shared/logo";

export const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const Title = styled(Logo)`
  padding-bottom: 20px;
`;

export const InputBox = styled.input`
  font-size: 16px;
  line-height: 16px;
  width: 100%;
  max-width: 500px;
  margin: 20px;
  padding: 5px 20px;
  outline: none;
  border-radius: 4px;
  color: #000000;
  height: 54px;
  border: none;
  background-color: aliceblue;
`;

export const Error = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  max-width: 500px;
  margin: 20px;
  padding: 10px 20px;
  border-radius: 4px;
  color: #ffffff;
  border: none;
  background-color: red;
`;

export const SubmitButton = styled.button`
  width: 120px;
  padding: 14px 20px;
  border: none;
  border-radius: 4px;
  margin: 10px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  background-color: #017de8;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.8;
      cursor: not-allowed;
    `}
`;

export const Link = styled.div`
  padding-top: 15px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  :hover {
    color: #017de8;
    text-decoration: underline;
  }
`;
