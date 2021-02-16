import Head from "next/head";
import Header from "../components/Header";
import PostCard from "../components/PostCard/PostCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <PostCard />
    </div>
  );
}
