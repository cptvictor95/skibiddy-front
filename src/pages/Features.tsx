import { Flex, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import SongCard from "../components/SongCard";
import { Song } from "../interface/Song";
import Main from "../layouts/Main";

const Features: React.FC = () => {
  const [freeSongs, setFreeSongs] = useState([]);

  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  useEffect(() => {
    try {
      const getFreeSongs = async () => {
        return await fetch(
          "http://localhost:3002/freeSongs",
          options
        ).then((result) => result.json());
      };

      const songs = getFreeSongs();
      songs.then((res) => {
        console.info("songs", res.songs);
        setFreeSongs(res.songs);
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }, [setFreeSongs]);

  return (
    <Main title="Features">
      <Text as="h2" textStyle="h2">
        Features
      </Text>
      <Text as="h3" textStyle="h3">
        All the free songs
      </Text>
      <Flex flexWrap="wrap" p={4}>
        {freeSongs &&
          freeSongs.map((song: Song) => <SongCard song={song} key={song.id} />)}
      </Flex>
    </Main>
  );
};

export default Features;
