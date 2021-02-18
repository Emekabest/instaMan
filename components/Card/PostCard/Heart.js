import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const Heart = ({ onClick, isLoved }) => {
  return (
    <Box
      as="span"
      onClick={onClick}
      cursor="pointer"
      transition=".5s !important"
      color="red.600"
      _active={{
        transform: "scale(.9)",
      }}
    >
      {isLoved ? <BsHeartFill /> : <BsHeart />}
    </Box>
  );
};

Heart.propTypes = {
  /**
   * boolean to determine state
   */
  isLoved: PropTypes.bool.isRequired,
  /**
   * function that toggles `isLoved` state
   */
  onClick: PropTypes.func.isRequired,
};

export default Heart;
