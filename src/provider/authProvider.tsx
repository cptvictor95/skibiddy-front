import axios from "axios";
import React from "react";
import { baseUrl } from "../contants";
import AuthContext from "../context/authContext";

export const AuthProvider: React.FC<{ children: any }> = ({ children }) => {
  const [token, setToken] = React.useState<string | null>(
    localStorage.getItem("token")
  );
  const [songs, setSongs] = React.useState([]);

  const getSongs = async () => {
    try {
      const response = await axios.get(`${baseUrl}/songs`, {
        headers: {
          authorization: token,
        },
      });
      console.log(response.data);
      setSongs(response.data.songs);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  React.useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  const authStates = { token, songs };
  const authActions = { setToken, getSongs };
  return (
    <AuthContext.Provider value={{ authStates, authActions }}>
      {children}
    </AuthContext.Provider>
  );
};
