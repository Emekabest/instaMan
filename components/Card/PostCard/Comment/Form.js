import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Button, Flex, IconButton, Input } from "@chakra-ui/react";
import { GrEmoji } from "react-icons/gr";

const Form = ({ commentClicked, onCommentClicked }) => {
  const [value, setValue] = useState("");
  const refInput = useRef();

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  useEffect(() => {
    if (commentClicked) {
      refInput.current.focus();
    }
  }, [commentClicked]);

  return (
    <Flex borderTop="1px" borderColor="gray.300" mt={2} as="form">
      <IconButton variant="ghost" rounded="none" fontSize="2xl" type="button">
        <GrEmoji />
      </IconButton>

      <Input
        rounded="none"
        variant="ghost"
        ml={1}
        px={0}
        placeholder="Add a comment..."
        value={value}
        onChange={handleChange}
        onBlur={onCommentClicked.bind(null, false)}
        ref={refInput}
      />

      <Button
        variant="ghost"
        rounded="none"
        color="dodgerblue"
        disabled={!value}
        type="submit"
      >
        Post
      </Button>
    </Flex>
  );
};

Form.propTypes = {
  /**
   * boolean to determine state
   */
  commentClicked: PropTypes.bool.isRequired,
  /**
   * function that updates `commentClicked` state to `true` or `false`
   */
  onCommentClicked: PropTypes.func.isRequired,
};

export default Form;
