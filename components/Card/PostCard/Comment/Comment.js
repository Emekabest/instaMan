import { Flex, Text } from "@chakra-ui/react";
import useLove from "../../../../hooks/useLove";
import Heart from "../Heart";

const Comment = () => {
  const { isLoved, handleIsLoveChange } = useLove();

  return (
    <Flex alignItems="center">
      <Text as="b" opacity=".8">
        username
      </Text>

      <Text isTruncated mx={2}>
        My husband has worked at Mongo for over 8 years. Best company ever! My
        husband has worked at Mongo for over 8 years. Best company ever!
      </Text>

      <Text fontSize="sm">
        <Heart isLoved={isLoved} onClick={handleIsLoveChange} />
      </Text>
    </Flex>
  );
};

export default Comment;
