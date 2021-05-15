import React from "react";
import styled from "styled-components";
import Logo from "logo.svg";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #000000;
  opacity: 0.4;
  cursor: progress;
  z-index: 10000000;
`;

const Spinner = styled.img`
  height: 80px;
  width: 80px;
  animation: loader-spin infinite 3s linear;
  @keyframes loader-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => (
  <Container>
    <Spinner src={Logo} alt="loader" />
  </Container>
);

export default Loader;
