import { Flex, Stack, Text } from "@chakra-ui/layout";
import useAuth from "../hooks/useAuth";
import Main from "../layouts/Main";
import React from "react";
import AuthCtx from "../context/authContext";
import { Song } from "../interface/Song";
import SongCtx from "../context/songContext";
import SongCard from "../components/SongCard";
import { Input } from "@chakra-ui/input";
import { useForm } from "react-hook-form";
import { IconButton } from "@chakra-ui/button";
import { Search2Icon } from "@chakra-ui/icons";
import { Select } from "@chakra-ui/select";

interface SearchTypes {
  searchInput: string;
  searchType: string;
}

const Feed: React.FC = () => {
  useAuth();
  const { authStates } = React.useContext(AuthCtx);
  const { songStates, songActions } = React.useContext(SongCtx);
  const { register, handleSubmit } = useForm();

  React.useEffect(() => {
    songActions.getSongs();
  }, [authStates.token, songStates.setSongs]);

  const onSearch = (data: SearchTypes) => {
    if (data.searchInput) {
      return songActions.getFilteredSongs(data.searchInput, data.searchType);
    }
    if (!data.searchInput) {
      return songActions.getSongs();
    }
  };

  return (
    <Main title="Feed">
      <Flex
        as="article"
        direction="column"
        minH="70vh"
        w="100%"
        px={8}
        mb={16}
        justify={{ base: "center", md: "space-around", xl: "space-around" }}
      >
        <Flex
          as="section"
          w={{ base: "80%", sm: "100%", md: "100%" }}
          direction={{ base: "column", sm: "row", xl: "row" }}
          justify={{ base: "space-between", sm: "center" }}
          align="center"
        >
          <Text
            as="h2"
            textStyle="h2"
            w={{ base: "80%", sm: "100%", md: "60%" }}
          >
            Songs list
          </Text>
          <Flex
            as="form"
            onSubmit={handleSubmit(onSearch)}
            w={{ base: "80%", sm: "100%", md: "40%" }}
          >
            <Stack>
              <Select {...register("searchType")}>
                <option value="name">Author</option>
                <option value="title">Title</option>
                <option value="album">Album</option>
                <option value="genre">Genre</option>
              </Select>
              <Flex>
                <IconButton
                  icon={<Search2Icon />}
                  mr={4}
                  aria-label="search"
                  type="submit"
                />
                <Input
                  {...register("search")}
                  placeholder="Search"
                  _placeholder={{
                    color: "gray",
                  }}
                />
              </Flex>
            </Stack>
          </Flex>
        </Flex>
        <Flex flexWrap="wrap" p={4}>
          {songStates.songs &&
            songStates.songs.map((song: Song) => (
              <SongCard song={song} key={song.id} />
            ))}
        </Flex>
      </Flex>
    </Main>
  );
};

export default Feed;
