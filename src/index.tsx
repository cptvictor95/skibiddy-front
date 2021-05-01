import { ColorModeScript } from "@chakra-ui/color-mode";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./utils/theme";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.initialColorMode} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
