import axios from "axios";
import React from "react";
import { baseUrlProd, baseUrlDev } from "../contants";
import AuthContext from "../context/authContext";
import { SignInDTO, SignUpDTO } from "../interface/Auth";

export const AuthProvider: React.FC<{ children: any }> = ({ children }) => {
  const [token, setToken] = React.useState<string | null>(
    localStorage.getItem("token")
  );

  const signIn = async (data: SignInDTO) => {
    try {
      const response = await axios.post(`${baseUrlProd}signin`, data);

      const token = response.data.token;
      localStorage.setItem("token", token);
      setToken(response.data.token);

      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const signUp = async (data: SignUpDTO) => {
    try {
      const response = await axios.post(`${baseUrlProd}signup`, data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      setToken(response.data.token);

      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  React.useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  const authStates = { token };
  const authActions = { setToken, signIn, signUp };
  return (
    <AuthContext.Provider value={{ authStates, authActions }}>
      {children}
    </AuthContext.Provider>
  );
};
