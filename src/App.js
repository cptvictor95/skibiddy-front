import { ChakraProvider, Text, theme } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Text>hello world!</Text>
    </ChakraProvider>
  );
}

export default App;
