import { useState } from "react";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { VscComment } from "react-icons/vsc";
import { IoSaveOutline } from "react-icons/io5";
import Description from "./Description";
import Form from "./Comment/Form";
import Comment from "./Comment/Comment";
import Heart from "./Heart";
import useLove from "../../../hooks/useLove";
import UserPhoto from "../../User/UserPhoto";

const hasLocation = 1;

const spacing = {
  py: 2,
  px: 4,
};

const PostCard = () => {
  const { isLoved, handleIsLoveChange } = useLove();
  const [commentClicked, setCommentClick] = useState(false);

  const handleCommentClicked = (val) => setCommentClick(val);

  return (
    <Box
      as="article"
      border="1px"
      borderColor="gray.300"
      rounded="sm"
      bg="white"
      mb={4}
    >
      <Flex
        as="header"
        justifyContent="space-between"
        alignItems="center"
        h="60px"
        {...spacing}
      >
        <Flex alignItems="center">
          <UserPhoto hasUnSeenHighlight={true} size="sm" showDetail />

          <Box ml={4}>
            <Text fontSize="sm" fontWeight={500} opacity=".78">
              earthcoders's profile picture earthcoders
            </Text>

            {hasLocation ? (
              <Text fontSize="xs" opacity=".78">
                Kuala Lumpur, Malaysia
              </Text>
            ) : null}
          </Box>
        </Flex>
        <Box>
          <HiOutlineDotsHorizontal />
        </Box>
      </Flex>

      <Box as="main">
        <Box h="614px" pos="relative">
          <Image w="100%" h="100%" src="/img/post-card.jpg" />

          <Box pos="absolute" bottom={3} left={4} fontSize="3xl" color="white">
            <FaUserCircle />
          </Box>
        </Box>

        <Box {...spacing}>
          <Flex justifyContent="space-between" fontSize="3xl" mb={1}>
            <Flex justifyContent="space-between" w="100px">
              <Heart onClick={handleIsLoveChange} isLoved={isLoved} />
              <VscComment onClick={handleCommentClicked.bind(null, true)} />
            </Flex>

            <IoSaveOutline />
          </Flex>

          <Text fontWeight="500">203 likes</Text>
        </Box>
      </Box>

      <Box as="footer">
        <Box {...spacing}>
          <Box mb={2}>
            <Description />
          </Box>

          <Box mb={2}>
            <Text opacity=".5" fontWeight="500" mb={1}>
              view all 100 comment
            </Text>

            <Stack fontSize="sm" spacing={1}>
              <Comment />
              <Comment />
            </Stack>
          </Box>

          <Text
            textTransform="uppercase"
            opacity=".7"
            fontSize="xs"
            fontWeight="500"
          >
            10 days ago
          </Text>
        </Box>

        <Form
          commentClicked={commentClicked}
          onCommentClicked={handleCommentClicked}
        />
      </Box>
    </Box>
  );
};

export default PostCard;
