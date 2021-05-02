import { Text } from "@chakra-ui/layout";
import React from "react";
import SongForm from "../components/SongForm";
import Main from "../layouts/Main";

const Publish: React.FC = () => {
  return (
    <Main title="Publish">
      <Text as="h2" textStyle="h2">
        Got a new song?
      </Text>
      <SongForm />
    </Main>
  );
};

export default Publish;
