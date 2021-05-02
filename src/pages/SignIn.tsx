import React from "react";
import LoginForm from "../components/LoginForm";
import loggedIn from "../hooks/loggedIn";
import Main from "../layouts/Main";

const SignIn: React.FC = () => {
  loggedIn();
  return (
    <Main title="Sign In">
      <LoginForm />
    </Main>
  );
};

export default SignIn;
