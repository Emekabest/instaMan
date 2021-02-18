import Link from "next/link";
import { Box, Flex, Text } from "@chakra-ui/react";
import UserPhoto from "./UserPhoto";

const UserItem = () => {
  return (
    <Link href="/">
      <a>
        <Flex
          as="article"
          p={2}
          _hover={{ bg: "gray.100" }}
          alignItems="center"
        >
          <UserPhoto size="md" hasUnSeenHighlight={true} />

          <Box lineHeight={1.5} ml={3}>
            <Text fontSize="sm" fontWeight={500} opacity=".78">
              the username
            </Text>
            <Text fontSize="sm" fontWeight={100} opacity=".78">
              full name
            </Text>
          </Box>
        </Flex>
      </a>
    </Link>
  );
};

export default UserItem;
