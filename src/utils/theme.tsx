import { extendTheme } from "@chakra-ui/react";

// TO DO: Learn Advanced Theming
const Input = {
  parts: ["field"],
  baseStyle: {
    field: {
      color: "green.900",
    },
  },
  defaultProps: {
    variant: "filled",
    bg: "green.100",
  },
  variants: {
    filled: {
      field: {
        bg: "green.50",
        _hover: {
          bg: "green.100",
        },
        _focus: {
          bg: "green.100",
          borderColor: "green.400",
        },
        _selected: {
          bg: "green.100",
          borderColor: "green.400",
        },
        _active: {
          bg: "green.100",
          borderColor: "green.400",
        },
      },
    },
  },
};

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  styles: {
    global: (props) => ({
      "html, body": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        fontFamily: "body",
        color: props.colorMode === "dark" ? "neutral.50" : "green.900",
        bg: props.colorMode === "dark" ? "neutral.900" : "neutral.50",
      },
      a: {
        color: props.colorMode === "dark" ? "green.400" : "green.900",
      },
      h4: {
        color: props.colorMode === "dark" ? "green.400" : "green.900",
      },
    }),
  },
  fonts: {
    body: "Montserrat",
    heading: "Montserrat",
  },
  textStyles: {
    h1: {
      fontFamily: "Montserrat",
    },
    h2: {
      fontSize: "3xl",
      fontWeight: "normal",
      mb: 4,
    },
  },
  colors: {
    neutral: {
      50: "#F2FDFF",
      900: "#0E1004",
    },
    red: {
      400: "#D7263D",
      500: "#AD1F32",
    },
    green: {
      50: "#F3F6DF",
      100: "#E6EEBE",
      300: "#C5D86D",
      400: "#BED45E",
      500: "#B8D04E",
      800: "#1D2108",
      900: "#0E1004",
    },
    purple: {
      700: "#2E294E",
      900: "#150F1A",
    },
  },
  components: {
    Input,
    Button: {
      baseStyle: {
        letterSpacing: "1.2px",
      },
      variants: {
        solid: {
          bgColor: "green.300",
          color: "neutral.900",
          _hover: {
            bg: "green.500",
          },
          _active: {
            bg: "green.500",
          },
        },
        "mobile-menu-btn": {
          bgColor: "transparent",
          color: "green.500",
          borderRadius: "full",
          _hover: {
            bg: "transparent",
          },
          _active: {
            bg: "transparent",
          },
          _focus: {
            bg: "transparent",
            borderColor: "transparent",
          },
          _selected: {
            bg: "transparent",
            borderColor: "transparent",
          },
        },
      },
    },
  },
});

export default theme;
