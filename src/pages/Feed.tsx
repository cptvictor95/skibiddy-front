import { Box, Flex, Text } from "@chakra-ui/layout";
import useAuth from "../hooks/useAuth";
import Main from "../layouts/Main";
import React from "react";
import AuthCtx from "../context/authContext";

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
  const { authStates, authActions } = React.useContext(AuthCtx);
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    if (authStates.token) {
      authActions.getSongs();
    }
  }, [authStates.token, token]);

  return (
    <Main title="Feed">
      <Flex direction="column" minH="70vh" maxW="100%" px={8} mb={16}>
        <Text as="h2" textStyle="h2">
          Songs list
        </Text>
        <Flex flexWrap="wrap" p={4}>
          {authStates.songs &&
            authStates.songs.map((song: Song) => {
              return (
                <Box key={song.id} px={12} py={4}>
                  <Text>{song.title}</Text>
                  <Text>{new Date(song.posted_at).toUTCString()}</Text>
                  <Text>{song.genre}</Text>
                </Box>
              );
            })}
        </Flex>
      </Flex>
    </Main>
  );
};

export default Feed;
