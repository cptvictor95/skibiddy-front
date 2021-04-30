import React from "react";
import Main from "../layouts/Main";
import Hero from "../sections/Hero";

const Home: React.FC = () => {
  return (
    <Main title="Home">
      <Hero
        title="Share your love through the magic of music"
        subtitle="Whether you're a musician or an enthusiast, it's free!"
        image="/img/heroImg.jpg"
        ctaLink="/signup"
        ctaText="Create your account"
      />
    </Main>
  );
};

export default Home;
