import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { OpenAI_Logo } from "../assets";

const Navbar = () => {
  return (
    <Box
      w="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      p="4"
      borderBottom="1px solid #e6ebf4"
    >
      <Link to="/">
        <Image src={OpenAI_Logo} alt="OpenAI_Logo" w="28" objectFit="contain" />
      </Link>
      <Link to="create-post">
        <Button bg="#6469ff" size="sm" color="white">
          Create
        </Button>
      </Link>
    </Box>
  );
};

export default Navbar;
