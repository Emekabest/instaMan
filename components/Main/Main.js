import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

const Main = ({ children }) => {
  return (
    <Box as="main" flex="1" bg="gray.100" pt="90px">
      <Box maxW="975px" mx="auto">
        {children}
      </Box>
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
