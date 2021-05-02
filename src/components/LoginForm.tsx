import { Box, Flex, Text } from "@chakra-ui/layout";
import { FormErrorMessage, FormLabel, Input, Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import AuthCtx from "../context/authContext";
import FormControl from "./FormControl";

interface FormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { authActions } = React.useContext(AuthCtx);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const toast = useToast();
  const history = useHistory();

  const onSubmit = async (data: FormData) => {
    const response = await authActions.signIn(data);

    reset({
      email: "",
      password: "",
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
      <Text as="h2" textStyle="h2">
        Login
      </Text>
      <Box as="form" onSubmit={handleSubmit(onSubmit)} w="250px">
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
          Login
        </Button>
      </Box>
    </Flex>
  );
};

export default LoginForm;
