import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Home from "../components/Main/Home/Home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex flexDir="column" h="100vh">
        <Header />

        <Main>
          <Home />
        </Main>
      </Flex>
    </>
  );
}
