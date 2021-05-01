import React from "react";
// Chakra
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
// Font
import "@fontsource/montserrat";
// Theme
import theme from "./utils/theme";

import Router from "./routing/Router";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Router />
    </ChakraProvider>
  );
};

export default App;
