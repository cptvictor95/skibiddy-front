import { Button, ChakraProvider, Text } from "@chakra-ui/react";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Text>hello world!</Text>
      <Button>Skibiddy</Button>
    </ChakraProvider>
  );
}

export default App;
