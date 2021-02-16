import { Button, Flex, IconButton, Input } from "@chakra-ui/react";
import { GrEmoji } from "react-icons/gr";

const CommentForm = () => {
  return (
    <Flex borderTop="1px" borderColor="gray.300" mt={2}>
      <IconButton variant="ghost" rounded="none" fontSize="2xl">
        <GrEmoji />
      </IconButton>

      <Input rounded="none" variant="ghost" ml={1} px={0} />

      <Button variant="ghost" rounded="none" color="dodgerblue">
        Post
      </Button>
    </Flex>
  );
};

export default CommentForm;
