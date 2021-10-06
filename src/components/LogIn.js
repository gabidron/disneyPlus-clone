import React from "react";
import styled from "styled-components";
import { auth, newUser } from "../firebase";

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
              document.getElementById("modal").style.display = "flex";
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
            document.getElementById("cta").style.display = "flex";
          }}
        >
          <h2 id="modal__name">Log in</h2>
          <span>X</span>
        </LoginContainerHeader>
        <LoginMain id="loginMain">
          <label htmlFor="email__logIn">Email</label>
          <input type="email" name="email__logIn" id="email__logIn" />
          <label htmlFor="pass__logIn">Password</label>
          <input type="password" name="pass__logIn" id="pass__logIn" />
          <button
            onClick={() => {
              const email = document.getElementById("email__logIn").value;
              const pass = document.getElementById("pass__logIn").value;
              alert(pass);
            }}
          >
            Log in
          </button>
          <button>Log in with google</button>
          <button
            onClick={() => {
              document.getElementById("signUp__Container").style.display =
                "flex";
              document.getElementById("loginMain").style.display = "none";
              document.getElementById("modal__name").innerText = "Sign Up";
            }}
          >
            New account
          </button>
        </LoginMain>
        <SignUpContainer id="signUp__Container">
          <label htmlFor="signUp__email">Email</label>
          <input type="email" name="signUp__email" id="signUp__email" />
          <label for="signUp__pass">Password</label>
          <input type="password" name="signUp__pass" id="signUp__pass" />
          <button
            onClick={() => {
              const email = document.getElementById("signUp__email").value;
              const pass = document.getElementById("signUp__pass").value;
              newUser(email, pass);
            }}
          >
            Create account
          </button>

          <h3 style={{ textAlign: "center" }}>Or</h3>

          <button>Sign up with google</button>
          <button
            onClick={() => {
              document.getElementById("signUp__Container").style.display =
                "none";
              document.getElementById("loginMain").style.display = "flex";
              document.getElementById("modal__name").innerText = "Log In";
            }}
          >
            Back to sign in
          </button>
        </SignUpContainer>
      </LoginContainer>
    </Container>
  );
};

export default LogIn;
const LoginMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 5px;
  & button {
    background-color: transparent;
    color: white;
    outline: none;
    border: 2px solid #fff;
    border-radius: 5px;
    font-size: 18px;
    margin-top: 15px;
    cursor: pointer;
    text-transform: uppercase;
  }
  & input {
    font-size: 15px;
    outline: none;
    border: none;
    border-radius: 4px;
  }
`;
const LoginContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 400px;
  background-color: #0483ee;
  color: #fff;
  border-radius: 12px;
  display: none;
  flex-direction: column;
  text-transform: uppercase;
`;
const LoginContainerHeader = styled.div`
  border-bottom: 2px solid #fff;
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
    border: 3px solid #fff;
    padding: 2px;
    margin: 2px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      font-size: 27px;
    }
  }
`;
const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 5px;
  & button {
    background-color: transparent;
    color: white;
    outline: none;
    border: 2px solid #fff;
    border-radius: 5px;
    font-size: 18px;
    margin-top: 15px;
    cursor: pointer;
    text-transform: uppercase;
  }
  & input {
    font-size: 15px;
    outline: none;
    border: none;
    border-radius: 4px;
  }
  display: none;
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
