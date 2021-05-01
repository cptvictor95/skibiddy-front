import React from "react";
import LoginForm from "../components/LoginForm";
import Main from "../layouts/Main";

const SignIn: React.FC = () => {
  return (
    <Main title="Sign In">
      <LoginForm />
    </Main>
  );
};

export default SignIn;
