import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Song } from "../interface/Song";

const SongCard: React.FC<{ song: Song }> = ({ song }) => {
  return (
    <Box song={song} px={12} w="400px" py={4}>
      <Text>{song.title}</Text>
      <Text>{song.album}</Text>
      <Text>{new Date(song.posted_at).toUTCString()}</Text>
      <Text>{song.genre}</Text>
    </Box>
  );
};

export default SongCard;
