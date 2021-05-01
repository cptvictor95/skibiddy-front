import { Button } from "@chakra-ui/button";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useHistory } from "react-router";
import useAuth from "../hooks/useAuth";
import Main from "../layouts/Main";
import React from "react";
import AuthCtx from "../context/authContext";
import YoutubeEmbed from "../components/YoutubeEmbed";

type Song = {
  id: string;
  title: string;
  album: string;
  genre: string;
  file: string;
  posted_at: Date;
  author_id: string;
};

const Feed = () => {
  useAuth();
  const history = useHistory();
  const { actions, states } = React.useContext(AuthCtx);

  React.useEffect(() => {
    if (states.token) {
      actions.getSongs();
    }
  }, [states.token]);

  const logout = () => {
    localStorage.removeItem("token");
    return history.push("/");
  };

  return (
    <Main title="Feed">
      <Button onClick={logout}>Logout</Button>
      <Flex direction="column" minH="70vh" px={8} mb={16}>
        <Text as="h2" textStyle="h2">
          Songs list
        </Text>
        {states.songs &&
          states.songs.map((song: Song) => {
            return (
              <Box key={song.id} p={4}>
                <Text>{song.title}</Text>
                <Text>{song.author_id}</Text>
                <Text>{new Date(song.posted_at).toUTCString()}</Text>
                <Text>{song.genre}</Text>
                <YoutubeEmbed title={song.title} embedId={song.file} />
              </Box>
            );
          })}
      </Flex>
    </Main>
  );
};

export default Feed;
