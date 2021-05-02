import axios from "axios";
import React from "react";
import { baseUrl } from "../contants";
import AuthContext from "../context/authContext";

interface signInDTO {
  email: string;
  password: string;
}

export const AuthProvider: React.FC<{ children: any }> = ({ children }) => {
  const [token, setToken] = React.useState<string | null>(
    localStorage.getItem("token")
  );

  const signIn = async (data: signInDTO) => {
    try {
      const response = await axios.post(`${baseUrl}/signin`, data);

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
  const authActions = { setToken, signIn };
  return (
    <AuthContext.Provider value={{ authStates, authActions }}>
      {children}
    </AuthContext.Provider>
  );
};
