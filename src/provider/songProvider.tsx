import axios from "axios";
import React from "react";
import { baseUrlProd } from "../contants";
// import { baseUrlDev } from "../contants";
import AuthCtx from "../context/authContext";
import SongContext from "../context/songContext";
import { Song, SongDTO } from "../interface/Song";

export const SongProvider: React.FC<{ children: any }> = ({ children }) => {
  const [songs, setSongs] = React.useState<Song[] | null>([]);
  const { authStates } = React.useContext(AuthCtx);

  const getSongs = async () => {
    try {
      const response = await axios.get(`${baseUrlProd}songs`, {
        headers: {
          authorization: authStates.token,
        },
      });
      console.log(response.data);
      setSongs(response.data.songs);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const createSong = async (data: SongDTO) => {
    try {
      const response = await axios.post(`${baseUrlProd}songs`, data, {
        headers: {
          authorization: authStates.token,
        },
      });

      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const songStates = { songs };
  const songActions = { getSongs, createSong };
  return (
    <SongContext.Provider value={{ songStates, songActions }}>
      {children}
    </SongContext.Provider>
  );
};
