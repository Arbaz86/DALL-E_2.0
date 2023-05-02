import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPrompts } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", prompts: "", photo: "" });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Box maxW="7xl" m="auto">
      <Box>
        <Heading fontWeight="600" as="h1" color="#222328" fontSize="32px">
          Create
        </Heading>
        <Text mt="2" color="#666e75" fontSize="14px" maxW="500px">
          Create imaginative and visually stunning images through DALL-E AI and
          share them with the community
        </Text>
      </Box>
    </Box>
  );
};

export default CreatePost;
