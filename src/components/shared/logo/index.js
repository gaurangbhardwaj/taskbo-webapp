import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  color: #017de8;
  font-size: 36px;
  align-items: center;
  i {
    font-size: 20px;
  }
`;

const Logo = () => (
  <Title>
    Task<i>bo</i>
  </Title>
);

export default Logo;
