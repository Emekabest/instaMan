import PropTypes from "prop-types";
import Link from "next/link";
import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import Pop from "../Pop/Pop";

const renderPhoto = (size, hasUnSeenHighlight, handleOpen) => (
  <Box
    w={size}
    h={size}
    rounded="full"
    pos="relative"
    cursor="pointer"
    onMouseOver={handleOpen}
    onClick={handleOpen}
    _before={
      hasUnSeenHighlight
        ? {
            content: '""',
            pos: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "0%",
            width: "110%",
            height: "110%",
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
);

const PopHeader = () => (
  <Flex
    as="header"
    p={2}
    borderBottom="1px"
    borderColor="gray.300"
    alignItems="center"
  >
    {renderPhoto("56px", false)}

    <Stack spacing={2} ml={3} flex="1">
      <Box lineHeight={1.5}>
        <Text fontWeight={500} opacity=".9">
          the username
        </Text>
        <Text fontWeight={100} opacity=".78">
          full name
        </Text>
      </Box>

      <Box lineHeight={1.5}>
        <Link href="/">
          <a>
            <Text textColor="blue.500">https://telegram-link</Text>
          </a>
        </Link>
        <Text fontWeight={500} opacity=".78">
          followed by the most_popular and 10 others
        </Text>
      </Box>
    </Stack>
  </Flex>
);
const PopMain = () => (
  <Flex
    as="main"
    px={2}
    py={3}
    borderBottom="1px"
    borderColor="gray.300"
    textAlign="center"
  >
    <Box flex="1">
      <Text fontWeight={700} fontSize="md" opacity=".8">
        2000
      </Text>
      <Text opacity=".7">posts</Text>
    </Box>
    <Box flex="1">
      <Text fontWeight={700} fontSize="md" opacity=".8">
        2000
      </Text>
      <Text opacity=".7">posts</Text>
    </Box>
    <Box flex="1">
      <Text fontWeight={700} fontSize="md" opacity=".8">
        2000
      </Text>
      <Text opacity=".7">posts</Text>
    </Box>
  </Flex>
);
const PopFooter = () => (
  <Box as="footer">
    <Flex>
      <Box w={`${400 / 3}px`} h="130px" overflow="hidden" rounded="sm">
        <Image
          border="1px solid"
          borderColor="gray.200"
          src="/img/post-card.jpg"
          w="100%"
          h="100%"
        />
      </Box>
      <Box w={`${400 / 3}px`} h="130px" overflow="hidden" rounded="sm">
        <Image
          border="1px solid"
          borderColor="gray.200"
          src="/img/post-card.jpg"
          w="100%"
          h="100%"
        />
      </Box>
      <Box w={`${400 / 3}px`} h="130px" overflow="hidden" rounded="sm">
        <Image
          border="1px solid"
          borderColor="gray.200"
          src="/img/post-card.jpg"
          w="100%"
          h="100%"
        />
      </Box>
    </Flex>

    <Flex p={3}>
      <Button flex={1} mr={2} variant="outline">
        Message
      </Button>
      <Button flex={1} variant="outline">
        Following
      </Button>
    </Flex>
  </Box>
);

const UserPhoto = ({ size = "sm", hasUnSeenHighlight, showDetail }) => {
  size = size === "sm" ? "32px" : size === "md" ? "44px" : "56px";

  return showDetail ? (
    <Pop
      placement="bottom-start"
      renderTrigger={(handleOpen) =>
        renderPhoto(size, hasUnSeenHighlight, handleOpen)
      }
      showCloseBtn={false}
      triggerOptions={{ triggerOnHover: true }}
      w="400px"
    >
      <Box fontSize="sm">
        <PopHeader />
        <PopMain />
        <PopFooter />
      </Box>
    </Pop>
  ) : (
    renderPhoto(size, hasUnSeenHighlight)
  );
};

UserPhoto.propTypes = {
  /**
   * string to determine the `width` and `height`, it's `sm` by default
   */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default UserPhoto;
