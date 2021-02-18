import { Box, Flex } from "@chakra-ui/react";
import PostCard from "../../Card/PostCard/PostCard";
import Aside from "./Aside";

const Home = () => {
  return (
    <Flex maxW="975px" mx="auto">
      <Box w="610px" as="section">
        <PostCard />
      </Box>

      <Aside />
    </Flex>
  );
};

export default Home;
