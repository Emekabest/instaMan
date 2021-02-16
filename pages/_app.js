import { ChakraProvider } from "@chakra-ui/react";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
