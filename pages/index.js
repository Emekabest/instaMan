import { Button } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header";
import Modal from "../components/Modal";
import PostCard from "../components/PostCard/PostCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Modal openButtonText="open my content">
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
        typesetting industry Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s when an unknown printer took a galley of type
        and scrambled it to make a type specimen book it has? What is the full
        Lorem Ipsum text? What language is Lorem ipsum dolor?
      </Modal>

      <Modal openButtonText="open my bio" header=" my bio">
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
      </Modal>

      <PostCard />
    </div>
  );
}
