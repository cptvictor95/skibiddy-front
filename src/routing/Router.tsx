import React from "react";
// Auth Provider
import { AuthProvider } from "../provider/authProvider";
// React Router Dom
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Pages
import Contact from "../pages/Contact";
import Features from "../pages/Features";
import Feed from "../pages/Feed";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { SongProvider } from "../provider/songProvider";

const Router: React.FC = () => {
  return (
    <AuthProvider>
      <SongProvider>
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
            <Route path="/feed">
              <Feed />
            </Route>
          </Switch>
        </BrowserRouter>
      </SongProvider>
    </AuthProvider>
  );
};

export default Router;
