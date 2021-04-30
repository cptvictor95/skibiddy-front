import { Flex } from "@chakra-ui/layout";
import React from "react";
import Header from "../sections/Header";

const Main: React.FC<{ children: React.ReactNode; title?: string }> = ({
  children,
  title,
}) => {
  return (
    <Flex
      as="main"
      direction="column"
      m="0 auto"
      maxW={{ base: "auto", xl: "1200px" }}
      align="center"
    >
      <title>{title}</title>
      <Header />
      <>{children}</>
    </Flex>
  );
};

export default Main;
