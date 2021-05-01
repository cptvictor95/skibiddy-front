import React from "react";
// Chakra
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
// React Router
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Font
import "@fontsource/montserrat";
// Theme
import theme from "./utils/theme";
// Pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import Features from "./pages/Features";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
