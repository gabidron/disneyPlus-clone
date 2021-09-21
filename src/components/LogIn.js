import React from "react";
import styled from "styled-components";
const LogIn = () => {
  return <Container></Container>;
};

export default LogIn;
const Container = styled.div`
  position: relative;
  height: calc(100vh-60px);
  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "df";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
