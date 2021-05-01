import React from "react";
import SignUpForm from "../components/SignUpForm";
import Main from "../layouts/Main";

const SignUp: React.FC = () => {
  return (
    <Main title="Sign Up">
      <SignUpForm />
    </Main>
  );
};

export default SignUp;
