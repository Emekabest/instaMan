import { Box } from "@chakra-ui/react";

const Aside = () => {
  return (
    <Box
      as="aside"
      w="361px"
      h="calc(100% - 90px)"
      pos="fixed"
      bg="red"
      zIndex="20"
      transform="translateX(610px)"
    ></Box>
  );
};

export default Aside;
