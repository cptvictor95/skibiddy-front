import React from "react";
import AuthContext from "../context/authContext";

export const AuthProvider: React.FC<{ children: any }> = ({ children }) => {
  const [token, setToken] = React.useState<string | null>(
    localStorage.getItem("token")
  );

  React.useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  const states = { token };
  const actions = { setToken };
  return (
    <AuthContext.Provider value={{ states, actions }}>
      {children}
    </AuthContext.Provider>
  );
};
