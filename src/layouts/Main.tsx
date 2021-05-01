import { Flex } from "@chakra-ui/layout";
import React from "react";
import Header from "../sections/Header";

const Main: React.FC<{ children: React.ReactNode; title?: string }> = ({
  children,
  title,
  ...mainProps
}) => {
  return (
    <Flex
      as="main"
      direction="column"
      m="0 auto"
      maxW={{ base: "auto", xl: "1200px" }}
      minH="70vh"
      align="center"
      {...mainProps}
    >
      <title>{title}</title>
      <Header />
      <>{children}</>
    </Flex>
  );
};

export default Main;
