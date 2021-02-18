import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

const description = `
          What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
          and typesetting industry Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s when an unknown printer took a galley
          of type and scrambled it to make a type specimen book it has?Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`;

const truncate = (str, maxLength) => {
  if (!maxLength || maxLength === str.length || maxLength > str.length) {
    return str;
  }

  return `${str.slice(0, maxLength - 3)}...`;
};

const Description = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleSeeMore = () => {
    setIsHidden(!isHidden);
  };

  return (
    <Text lineHeight={1}>
      {truncate(description, isHidden ? 150 : 0)}
      <Button size="sm" onClick={handleSeeMore} variant="ghost">
        {isHidden ? "see more" : "see less"}
      </Button>
    </Text>
  );
};

export default Description;
