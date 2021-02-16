import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { BiHomeAlt } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { ImCompass2 } from "react-icons/im";
import { BsHeart } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <Box as="header" borderBottom="1px" borderColor="gray.300">
      <Flex
        justifyContent="space-between"
        maxW="975px"
        mx="auto"
        alignItems="center"
      >
        <Box>
          <Text> InstaMan</Text>
        </Box>
        <Box>
          <Input placeholder="Search" />
        </Box>
        <Flex>
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
