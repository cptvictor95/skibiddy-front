import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
} from "@chakra-ui/react";

const CustomInput: React.FC<{
  id: string;
  name: string;
  label: string;
  error: any;
  required: boolean;
  register: any;
}> = ({ id, name, label, error, register, required }) => {
  return (
    <>
      {error ? (
        <>
          <FormErrorMessage display="inline-block" m={0}>
            <FormLabel htmlFor={id}>{label} is required</FormLabel>
          </FormErrorMessage>
        </>
      ) : (
        <FormLabel htmlFor={id}>{label}</FormLabel>
      )}
      <ChakraInput id={id} name={name} {...register(label, { required })} />
    </>
  );
};

export default CustomInput;
