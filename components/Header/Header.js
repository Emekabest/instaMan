import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { BiHomeAlt } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { ImCompass2 } from "react-icons/im";
import { BsHeart } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import Brand from "./Brand";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <Box
      as="header"
      borderBottom="1px"
      borderColor="gray.300"
      p={2}
      pos="fixed"
      top={0}
      left={0}
      w="100%"
      zIndex={10}
      bg="white"
    >
      <Flex
        justifyContent="space-between"
        maxW="975px"
        mx="auto"
        alignItems="center"
        h="54px"
      >
        <Brand />

        <Box>
          <SearchBar />
        </Box>

        <Flex minW="200px" justifyContent="space-between" fontSize="2xl">
          <BiHomeAlt />
          <FiSend />
          <ImCompass2 />
          <BsHeart />
          <BiUserCircle />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
