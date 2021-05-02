import React from "react";
import SignUpForm from "../components/SignUpForm";
import loggedIn from "../hooks/loggedIn";
import Main from "../layouts/Main";

const SignUp: React.FC = () => {
  loggedIn();
  return (
    <Main title="Sign Up">
      <SignUpForm />
    </Main>
  );
};

export default SignUp;
