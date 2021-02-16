import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsHeart } from "react-icons/bs";
import { VscComment } from "react-icons/vsc";
import { IoSaveOutline } from "react-icons/io5";
import Description from "./Description";
import CommentForm from "./CommentForm";

const hasUnSeenHighlight = true;
const hasLocation = 1;

const spacing = {
  py: 2,
  px: 4,
};

const PostCard = () => {
  return (
    <Box
      as="article"
      border="1px"
      borderColor="gray.300"
      w="614px"
      m={2}
      rounded="sm"
    >
      <Flex
        as="header"
        justifyContent="space-between"
        alignItems="center"
        h="60px"
        {...spacing}
      >
        <Flex alignItems="center">
          <Box
            w="32px"
            h="32px"
            rounded="full"
            pos="relative"
            _before={
              hasUnSeenHighlight
                ? {
                    content: '""',
                    pos: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "0%",
                    width: "115%",
                    height: "115%",
                    bgGradient: "linear(45deg, #f99d4c, #cb3994)",
                    rounded: "full",
                  }
                : {}
            }
          >
            <Image
              rounded="full"
              border="3px solid"
              borderColor="gray.100"
              src="/img/post-card.jpg"
              w="100%"
              h="100%"
              pos="relative"
              zIndex="1"
            />
          </Box>

          <Box ml={4}>
            <Text fontSize="sm" as="b" opacity=".78">
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
              <BsHeart />
              <VscComment />
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
              view all 100 comments
            </Text>

            <Stack fontSize="sm" spacing={1}>
              <Flex alignItems="center">
                <Text as="b" opacity=".8">
                  username
                </Text>

                <Text isTruncated mx={2}>
                  My husband has worked at Mongo for over 8 years. Best company
                  ever! My husband has worked at Mongo for over 8 years. Best
                  company ever!
                </Text>

                <Text fontSize="sm">
                  <BsHeart />
                </Text>
              </Flex>

              <Flex alignItems="center">
                <Text as="b" opacity=".8">
                  username
                </Text>

                <Text isTruncated mx={2}>
                  My husband has worked at Mongo for over 8 years. Best company
                  ever! My husband has worked at Mongo for over 8 years. Best
                  company ever!
                </Text>

                <Text fontSize="sm">
                  <BsHeart />
                </Text>
              </Flex>
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

        <CommentForm />
      </Box>
    </Box>
  );
};

export default PostCard;
