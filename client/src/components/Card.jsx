import { Avatar, Box, Button, Flex, GridItem, Img, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { downloadImage } from "../utils";
import { MdOutlineDownloading } from "react-icons/md";

const Card = ({ _id, name, photo, prompt }) => {
  return (
    <Box rounded="xl" pos="relative" boxShadow="sm" p="6"
      h="100%"
      _hover={{
        boxShadow: "base",
      }}>
      <Image
        w="full"
        h="auto"
        objectFit="cover"
        rounded="xl"
        src={photo}
        alt={prompt}
        _hover={{
          "& + .prompt-hover": {
            visibility: "visible",
          },
        }}
      />
      <Flex
        _hover={{
          visibility: "visible",
        }}
        className="prompt-hover"
        direction="column"
        visibility="hidden"
        pos="absolute"
        bottom="0"
        left="0"
        right="0"
        bg="#10131f"
        m="6"
        p="4"
        rounded="md"
        zIndex="1"
      >
        <Text color="white" overflowY="auto">
          {prompt}
        </Text>

        <Flex mt="5" justifyContent="space-between" alignItems="center" gap="2">
          <Flex alignItems="center" gap="2">
            <Avatar name={name} />
            <Text color="white" fontSize="sm">
              {name}
            </Text>
          </Flex>
          <Button color="white" _hover={{ color: "whiteAlpha.700", transform: "scale(1.2)" }} fontSize="32px" leftIcon={<MdOutlineDownloading />} bg="transparent" type="button" onClick={() => downloadImage(_id, photo)} _active={false}>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
