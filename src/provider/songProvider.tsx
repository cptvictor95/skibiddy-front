import axios from "axios";
import React from "react";
// import { baseUrlProd } from "../contants";
import { baseUrlDev } from "../contants";
import AuthCtx from "../context/authContext";
import SongContext from "../context/songContext";
import { Song, SongDTO } from "../interface/Song";

export const SongProvider: React.FC<{ children: any }> = ({ children }) => {
  const [songs, setSongs] = React.useState<Song[] | null>([]);
  const [filteredSongs, setFilteredSongs] = React.useState<Song[] | null>([]);
  const { authStates } = React.useContext(AuthCtx);

  const getSongs = async () => {
    try {
      const response = await axios.get(`${baseUrlDev}/songs`, {
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

  const getSongsByAuthor = (data: string) => {
    return axios
      .get(`${baseUrlDev}/songs/search?name=${data}`, {
        headers: {
          authorization: authStates.token,
        },
      })
      .then((res) => {
        console.info("axios data Input", data);
        console.info("axios getSongs Array", res.data.songs);

        return res.data.songs;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };

  // const getSongsByAuthor = async (data: string) => {
  //   try {
  //     const response = await axios.get(
  //       `${baseUrlDev}/songs/search?name=${data}`,
  //       {
  //         headers: {
  //           authorization: authStates.token,
  //         },
  //       }
  //     );

  //     console.info("axios getsongs data input", data);
  //     console.info("axios getsongs", response.data.songs);

  //     return response.data.songs;
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // };

  const createSong = async (data: SongDTO) => {
    try {
      const response = await axios.post(`${baseUrlDev}/songs`, data, {
        headers: {
          authorization: authStates.token,
        },
      });
      setFilteredSongs(response.data.songs);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const songStates = { songs, filteredSongs };
  const songActions = { getSongs, createSong, getSongsByAuthor };
  return (
    <SongContext.Provider value={{ songStates, songActions }}>
      {children}
    </SongContext.Provider>
  );
};
