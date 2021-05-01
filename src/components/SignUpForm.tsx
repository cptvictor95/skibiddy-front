import { Button } from "@chakra-ui/button";
import { FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { baseUrl } from "../contants";
import FormControl from "./FormControl";

interface FormData {
  name: string;
  nickname: string;
  email: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const toast = useToast();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(`${baseUrl}/signup`, data);
      console.log(response.data);

      reset({
        name: "",
        nickname: "",
        email: "",
        password: "",
      });

      return toast({
        title: `${response.data.status}`,
        description: `${response.data.message}`,
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <Flex direction="column" align="center" justify="center" minH="70vh">
      <Text as="h2" textStyle="h2">
        Create account
      </Text>
      <Box as="form" onSubmit={handleSubmit(onSubmit)} w="250px">
        <FormControl isInvalid={Boolean(errors.name)}>
          {errors.name ? (
            <>
              <FormErrorMessage display="inline-block" m={0}>
                <FormLabel htmlFor="name">Name {errors.name.message}</FormLabel>
              </FormErrorMessage>
            </>
          ) : (
            <FormLabel htmlFor="name">Name</FormLabel>
          )}
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            {...register("name", {
              required: "is required",
            })}
          />
        </FormControl>

        <FormControl isInvalid={Boolean(errors.nickname)}>
          {errors.nickname ? (
            <>
              <FormErrorMessage display="inline-block" m={0}>
                <FormLabel htmlFor="nickname">
                  Nickname {errors.nickname.message}
                </FormLabel>
              </FormErrorMessage>
            </>
          ) : (
            <FormLabel htmlFor="nickname">Nickname</FormLabel>
          )}
          <Input
            id="nickname"
            placeholder="johnDoe123"
            {...register("nickname", {
              required: "is required",
            })}
          />
        </FormControl>

        <FormControl isInvalid={Boolean(errors.email)}>
          {errors.email ? (
            <>
              <FormErrorMessage display="inline-block" m={0}>
                <FormLabel htmlFor="email">
                  E-mail {errors.email.message}
                </FormLabel>
              </FormErrorMessage>
            </>
          ) : (
            <FormLabel htmlFor="email">E-mail</FormLabel>
          )}
          <Input
            id="email"
            type="email"
            placeholder="john.doe@email.com"
            {...register("email", {
              required: "is required",
            })}
          />
        </FormControl>

        <FormControl isInvalid={Boolean(errors.password)}>
          {errors.password ? (
            <>
              <FormErrorMessage display="inline-block" m={0}>
                <FormLabel htmlFor="password">
                  Password {errors.password.message}
                </FormLabel>
              </FormErrorMessage>
            </>
          ) : (
            <FormLabel htmlFor="password">Password</FormLabel>
          )}
          <Input
            id="password"
            placeholder="******"
            type="password"
            {...register("password", {
              required: "is required",
            })}
          />
        </FormControl>

        <Button type="submit" alignSelf="flex-end">
          Create
        </Button>
      </Box>
    </Flex>
  );
};

export default SignUpForm;
