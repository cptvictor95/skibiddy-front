import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        color: "neutral.50",
        bg: "purple.900",
      },
    },
  },
  colors: {
    neutral: {
      50: "#F2FDFF",
    },
    primary: {
      400: "#F1414D",
    },
    purple: {
      900: "#150F1A",
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bgColor: "red.400",
          color: "neutral.50",
        },
      },
    },
  },
});

export default theme;
