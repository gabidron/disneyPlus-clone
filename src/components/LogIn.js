import React from "react";
import styled from "styled-components";
import { auth } from "../firebase";

const LogIn = () => {
  console.log(auth);
  return (
    <Container>
      <CTA id="cta">
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp
          onClick={() => {
            if (auth.currentUser) {
            } else {
              document.getElementById("cta").style.display = "none";
              document.getElementById("modal").style.display = "block";
            }
          }}
        >
          {auth.currentUser ? "Log out" : "Get All there"}
        </SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an aditional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          the Disney Bundle will increse by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>

      <LoginContainer id="modal">
        <LoginContainerHeader
          onClick={() => {
            document.getElementById("modal").style.display = "none";
            document.getElementById("cta").style.display = "block";
          }}
        >
          <h2>Log in</h2>
          <span>X</span>
        </LoginContainerHeader>
        <LoginMain>
          <input type="email" />
          <input type="password" />
          <button>Log in</button>
          <button>Log in with google</button>
          <button>New account</button>

          <button>Sign up with google</button>
          <input type="email" />
          <input type="password" />
          <button>Create account</button>
        </LoginMain>
      </LoginContainer>
    </Container>
  );
};

export default LogIn;
const LoginMain = styled.div``;
const LoginContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  color: black;
  display: none;
`;
const LoginContainerHeader = styled.div`
  border-bottom: 2px solid #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  & span {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 25px;
    font-weight: 600;
    border: 1px solid #000;
    padding: 1px 2px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: top;
  justify-content: center;
  min-height: calc(100vh - 70px);
  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    z-index: -1;
  }
`;
const CTA = styled.div`
  width: 80%;
  max-width: 615px;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
`;
const CTALogoOne = styled.img``;
const CTALogoTwo = styled.img`
  width: 98%;
`;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  text-transform: uppercase;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
