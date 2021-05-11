import { Flex, Text } from "@chakra-ui/layout";
import useAuth from "../hooks/useAuth";
import Main from "../layouts/Main";
import React, { useState } from "react";
import AuthCtx from "../context/authContext";
import { Song } from "../interface/Song";
import SongCtx from "../context/songContext";
import SongCard from "../components/SongCard";
import { Input } from "@chakra-ui/input";
import { useForm } from "react-hook-form";
import { IconButton } from "@chakra-ui/button";
import { Search2Icon } from "@chakra-ui/icons";

const Feed = () => {
  useAuth();
  const { authStates } = React.useContext(AuthCtx);
  const { songStates, songActions } = React.useContext(SongCtx);
  const [songs, setSongs] = useState([]);
  const { register, handleSubmit } = useForm();

  React.useEffect(() => {
    if (authStates.token) {
      console.info("auth state token", authStates.token);
    }
    songActions.getSongs();
    console.info("filtered songs", songStates.filteredSongs);

    const myHeaders = new Headers({
      Authorization: authStates.token as string,
      "Content-Type": "application/json",
    });

    const myInit = {
      method: "GET",
      headers: myHeaders,
    };

    const myRequest = new Request(
      "https://skibiddy-backend.herokuapp.com/songs",
      myInit
    );

    try {
      const fetchSongs = async () => {
        return await fetch(myRequest).then((result) => result.json());
      };

      const songs = fetchSongs();
      songs.then((res) => {
        console.info("songs with fetch", res.songs);
        setSongs(res.songs);
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }, [authStates.token, songStates.filteredSongs, setSongs]);

  const onSearch = (data: any) => {
    return songActions.getSongsByAuthor(data.search);
  };

  return (
    <Main title="Feed">
      <Flex direction="column" minH="70vh" maxW="100%" px={8} mb={16}>
        <Flex w="100%" justify="space-between">
          <Text as="h2" textStyle="h2">
            Songs list
          </Text>
          <Flex as="form" onSubmit={handleSubmit(onSearch)}>
            <IconButton
              icon={<Search2Icon />}
              mx={4}
              aria-label="search"
              type="submit"
            />
            <Input
              {...register("search")}
              placeholder="search by artist"
              _placeholder={{
                color: "gray",
              }}
            />
          </Flex>
        </Flex>
        <Flex flexWrap="wrap" p={4}>
          {songs &&
            songs.map((song: Song) => <SongCard song={song} key={song.id} />)}
        </Flex>
      </Flex>
    </Main>
  );
};

export default Feed;
