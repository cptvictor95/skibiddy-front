import axios from "axios";
import React from "react";
import { baseUrl } from "../contants";
import AuthCtx from "../context/authContext";
import SongContext from "../context/songContext";
import { Song } from "../interface/Song";

export const SongProvider: React.FC<{ children: any }> = ({ children }) => {
  const [songs, setSongs] = React.useState<Song[] | null>([]);
  const { authStates } = React.useContext(AuthCtx);

  const getSongs = async () => {
    try {
      const response = await axios.get(`${baseUrl}/songs`, {
        headers: {
          authorization: authStates.token,
        },
      });
      console.log(response.data);
      setSongs(response.data.songs);
    } catch (error) {
      throw new Error(error.message);
    }
  };
  const songStates = { songs };
  const songActions = { getSongs };
  return (
    <SongContext.Provider value={{ songStates, songActions }}>
      {children}
    </SongContext.Provider>
  );
};