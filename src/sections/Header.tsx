import { CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

const Header: React.FC = (props) => {
  const [show, setShow] = React.useState<boolean>(false);
  const toggleMenu = () => setShow(!show);
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("green.300", "neutral.900");
  const color = useColorModeValue("neutral.900", "green.300");

  const MenuItems: React.FC<{
    children: React.ReactNode;
    to?: string;
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
      bg={[bg, "transparent", "transparent", "transparent"]}
      color={color}
      {...props}
    >
      <Flex align="center">
        <Text w="100px">Logo</Text>
      </Flex>
      <Box as="aside" display={{ base: "block", md: "none" }}>
        {show ? (
          <>
            {colorMode === "dark" ? (
              <IconButton
                icon={<SunIcon />}
                onClick={toggleColorMode}
                variant="solid"
                aria-label="light-mode"
              />
            ) : (
              <IconButton
                icon={<MoonIcon />}
                onClick={toggleColorMode}
                variant="solid"
                aria-label="dark-mode"
              />
            )}
            <IconButton
              icon={<CloseIcon />}
              onClick={toggleMenu}
              aria-label="close-menu"
              variant="mobile-menu-btn"
            />
          </>
        ) : (
          <>
            {colorMode === "dark" ? (
              <IconButton
                icon={<SunIcon />}
                onClick={toggleColorMode}
                variant="solid"
                aria-label="light-mode"
              />
            ) : (
              <IconButton
                icon={<MoonIcon />}
                onClick={toggleColorMode}
                variant="solid"
                aria-label="dark-mode"
              />
            )}
            <IconButton
              icon={<HamburgerIcon />}
              onClick={toggleMenu}
              aria-label="open-menu"
              variant="mobile-menu-btn"
            />
          </>
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
          {!show ? (
            <>
              <MenuItems to="/signup">
                <Button size="sm" rounded="md" variant="solid">
                  Create account
                </Button>
              </MenuItems>
              {colorMode === "dark" ? (
                <IconButton
                  icon={<SunIcon />}
                  onClick={toggleColorMode}
                  variant="solid"
                  aria-label="light-mode"
                />
              ) : (
                <IconButton
                  icon={<MoonIcon />}
                  onClick={toggleColorMode}
                  variant="solid"
                  aria-label="dark-mode"
                />
              )}
            </>
          ) : (
            <MenuItems to="/signup" isLast>
              <Button size="sm" rounded="md" variant="solid">
                Create account
              </Button>
            </MenuItems>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
