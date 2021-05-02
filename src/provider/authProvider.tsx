import React from "react";
import AuthContext from "../context/authContext";

export const AuthProvider: React.FC<{ children: any }> = ({ children }) => {
  const [token, setToken] = React.useState<string | null>(
    localStorage.getItem("token")
  );

  React.useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  const authStates = { token };
  const authActions = { setToken };
  return (
    <AuthContext.Provider value={{ authStates, authActions }}>
      {children}
    </AuthContext.Provider>
  );
};
