import React from "react";
import { FormControl as ChakraFormControl } from "@chakra-ui/react";

const FormControl: React.FC<{
  children: React.ReactNode;
  isInvalid: boolean | undefined;
}> = ({ children, isInvalid }) => {
  return (
    <ChakraFormControl isInvalid={isInvalid} w="100%" pb={4}>
      {children}
    </ChakraFormControl>
  );
};

export default FormControl;
