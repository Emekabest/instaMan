import { Box, Flex, IconButton, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import Pop from "../Pop/Pop";
import UserItem from "../User/UserItem";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [hasFocus, setHasFocus] = useState(false);

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };

  const handleClear = () => setQuery("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (query) {
      // alert("Search for this user... " + query);
    }
  };

  const IconButtonProps = {
    size: "xs",
    rounded: "none",
    variant: "ghost",
    fontSize: "md",
    _focus: {
      outline: "none",
      shadow: "lg",
    },
  };

  return (
    <Flex
      as="form"
      alignItems="center"
      border="1px"
      borderColor="gray.300"
      rounded="sm"
      overflow="hidden"
      onSubmit={handleSearch}
      bg="gray.100"
      minW="250px"
    >
      <Pop
        trigger={
          <Box
            as="span"
            transform={`translateX(${hasFocus || query ? 0 : 50}px)`}
          >
            <BiSearchAlt />
          </Box>
        }
        triggerOptions={{
          ...IconButtonProps,
          disabled: !query,
          type: "submit",
        }}
      >
        <Box h="400px" overflowY="auto" my={2}>
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
        </Box>
      </Pop>
      <Input
        px={0}
        placeholder="Search by username..."
        textAlign="left"
        size="xs"
        variant="ghost"
        bg="transparent"
        value={query}
        onChange={handleChange}
        transition=".5s"
        textAlign={hasFocus || query ? "left" : "center"}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
      {query && (
        <IconButton {...IconButtonProps} type="button" onClick={handleClear}>
          <AiFillCloseCircle />
        </IconButton>
      )}
    </Flex>
  );
};

export default SearchBar;
