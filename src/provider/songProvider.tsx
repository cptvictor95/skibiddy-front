import axios from "axios";
import React from "react";
// import { baseUrlProd } from "../contants";
import { baseUrlDev } from "../contants";
import AuthCtx from "../context/authContext";
import SongContext from "../context/songContext";
import { Song, SongDTO } from "../interface/Song";

export const SongProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [songs, setSongs] = React.useState<Song[] | null>([]);
  const { authStates } = React.useContext(AuthCtx);

  const getSongs = async () => {
    try {
      const response = await axios.get(`${baseUrlDev}/songs`, {
        headers: {
          authorization: authStates.token,
        },
      });

      setSongs(response.data.songs);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const getFilteredSongs = async (data: string, filterType: string) => {
    try {
      const response = await axios.get(
        `${baseUrlDev}/songs/search?${filterType}=${data}`,
        {
          headers: {
            authorization: authStates.token,
          },
        }
      );

      setSongs(response.data.songs);
      return response.data.songs;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const createSong = async (data: SongDTO) => {
    try {
      const response = await axios.post(`${baseUrlDev}/songs`, data, {
        headers: {
          authorization: authStates.token,
        },
      });
      setSongs(response.data.songs);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const songStates = { songs };
  const songActions = { getSongs, createSong, getFilteredSongs, setSongs };
  return (
    <SongContext.Provider value={{ songStates, songActions }}>
      {children}
    </SongContext.Provider>
  );
};
