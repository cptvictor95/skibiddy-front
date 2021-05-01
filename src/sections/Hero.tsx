import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Stack } from "@chakra-ui/layout";
import React from "react";
import { useHistory } from "react-router-dom";

const Hero: React.FC<{
  title: string;
  subtitle: string;
  image: string;
  ctaLink: string;
  ctaText: string;
}> = ({ title, subtitle, image, ctaLink, ctaText, ...rest }) => {
  const history = useHistory();
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column", md: "row" }}
      wrap="nowrap"
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
      </Box>
      <Stack
        spacing={4}
        w={{ base: "80%", sm: "60%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h4"
          size="md"
          fontWeight="normal"
          opacity="0.8"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        <Button
          borderRadius="8px"
          size="md"
          lineHeight={1.5}
          alignSelf="flex-end"
          onClick={() => history.push(ctaLink)}
        >
          {ctaText}
        </Button>
      </Stack>
    </Flex>
  );
};

export default Hero;
