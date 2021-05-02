import { Flex } from "@chakra-ui/layout";
import {
  useToast,
  FormErrorMessage,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import SongCtx from "../context/songContext";
import useAuth from "../hooks/useAuth";
import { SongDTO } from "../interface/Song";
import FormControl from "./FormControl";

const SongForm = () => {
  const { songActions } = React.useContext(SongCtx);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const toast = useToast();
  const history = useHistory();
  useAuth();

  const onSubmit = async (data: SongDTO) => {
    const response = await songActions.createSong(data);
    reset({
      title: "",
      album: "",
      genre: "",
      file: "",
    });

    toast({
      title: `${response.data.status}`,
      description: `${response.data.message}`,
      duration: 5000,
      isClosable: true,
    });

    return history.push("/feed");
  };

  return (
    <Flex direction="column" align="center" justify="center" minH="70vh">
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        w="250px"
        direction="column"
      >
        <FormControl isInvalid={Boolean(errors.title)}>
          {errors.title ? (
            <>
              <FormErrorMessage display="inline-block" m={0}>
                <FormLabel htmlFor="title">
                  Title {errors.title.message}
                </FormLabel>
              </FormErrorMessage>
            </>
          ) : (
            <FormLabel htmlFor="title">Title</FormLabel>
          )}
          <Input
            id="title"
            type="text"
            placeholder="John Doe"
            {...register("title", {
              required: "is required",
            })}
          />
        </FormControl>

        <FormControl isInvalid={Boolean(errors.album)}>
          {errors.album ? (
            <>
              <FormErrorMessage display="inline-block" m={0}>
                <FormLabel htmlFor="album">
                  Album {errors.album.message}
                </FormLabel>
              </FormErrorMessage>
            </>
          ) : (
            <FormLabel htmlFor="album">Album</FormLabel>
          )}
          <Input
            id="album"
            placeholder="johnDoe123"
            {...register("album", {
              required: "is required",
            })}
          />
        </FormControl>

        <FormControl isInvalid={Boolean(errors.genre)}>
          {errors.genre ? (
            <>
              <FormErrorMessage display="inline-block" m={0}>
                <FormLabel htmlFor="genre">
                  Genre {errors.genre.message}
                </FormLabel>
              </FormErrorMessage>
            </>
          ) : (
            <FormLabel htmlFor="genre">Genre</FormLabel>
          )}
          <Input
            id="genre"
            type="genre"
            placeholder="john.doe@email.com"
            {...register("genre", {
              required: "is required",
            })}
          />
        </FormControl>

        <FormControl isInvalid={Boolean(errors.file)}>
          {errors.file ? (
            <>
              <FormErrorMessage display="inline-block" m={0}>
                <FormLabel htmlFor="file">Link {errors.file.message}</FormLabel>
              </FormErrorMessage>
            </>
          ) : (
            <FormLabel htmlFor="file">Link</FormLabel>
          )}
          <Input
            id="file"
            type="text"
            {...register("file", {
              required: "is required",
            })}
          />
        </FormControl>

        <Button type="submit" alignSelf="flex-end">
          Publish
        </Button>
      </Flex>
    </Flex>
  );
};

export default SongForm;
