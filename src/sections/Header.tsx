import { CloseIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@chakra-ui/button";

const Header: React.FC = (props) => {
  const [show, setShow] = React.useState<boolean>(false);
  const toggleMenu = () => setShow(!show);

  const MenuItems: React.FC<{
    children: React.ReactNode;
    to: string;
    isLast?: boolean;
  }> = ({ children, isLast, to = "/", ...rest }) => {
    return (
      <Text
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
        display="block"
        {...rest}
      >
        <Link to={to}>{children}</Link>
      </Text>
    );
  };

  return (
    <Flex
      as="nav"
      w="100%"
      align="center"
      justify="space-between"
      wrap="wrap"
      mb={8}
      p={8}
      bg={["primary.400", "primary.400", "transparent", "transparent"]}
      color={["neutral.50", "neutral.50", "primary.400", "primary.400"]}
      {...props}
    >
      <Flex align="center">
        <Text
          w="100px"
          color={["neutral.50", "neutral.50", "primary.400", "primary.400"]}
        >
          Logo
        </Text>
      </Flex>
      <Box
        as="aside"
        display={{ base: "block", md: "none" }}
        onClick={toggleMenu}
      >
        {show ? (
          // <CloseIcon cursor="pointer" p={4} fontSize="5xl" />
          <IconButton
            icon={<CloseIcon />}
            aria-label="close-menu"
            variant="ghost"
            _hover={{
              bg: "transparent",
            }}
          />
        ) : (
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="open-menu"
            variant="ghost"
            _hover={{
              bg: "transparent",
            }}
          />
        )}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          w="100%"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[8, 8, 0, 0]}
        >
          <MenuItems to="/">Home</MenuItems>
          <MenuItems to="/features">Features</MenuItems>
          <MenuItems to="/contact">Contact</MenuItems>
          <MenuItems to="/signin">Sign In</MenuItems>
          <MenuItems to="/signup" isLast>
            <Button
              size="sm"
              rounded="md"
              color={["primary.400", "primary.400", "neutral.50", "neutral.50"]}
              bg={["neutral.50", "neutral.50", "primary.400", "primary.400"]}
              _hover={{
                bg: ["neutral.50", "neutral.50", "primary.400", "primary.400"],
              }}
            >
              Create account
            </Button>
          </MenuItems>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
