import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", prompt: "", photo: "" });
  const [generatingImage, setGeneratingImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };
  const generateImage = async (e) => {
    if (form.prompt) {
      try {
        setGeneratingImage(true);
        const response = await fetch("http://localhost:8080/api/v1/dalle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        toast({
          title: "error",
          description: error.message,
          status: "fail",
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setGeneratingImage(false);
      }
    } else {
      toast({
        title: "Please Enter Prompt!",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.name) {
      setLoading(true);

      try {
        const response = await fetch("http://localhost:8080/api/v1/posts", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(form),
        });

        await response.json();
        navigate("/");
      } catch (error) {
        toast({
          title: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    } else {
      toast({
        title: "Please enter a prompt and generate an image",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };

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

      <Box>
        <form onSubmit={handleSubmit}>
          <Flex direction="column">
            <FormField
              labelName="Your name"
              name="name"
              type="text"
              placeholder="Arbaz Hussain"
              value={form.name}
              handleChange={handleChange}
            />
            <FormField
              labelName="Prompt"
              name="prompt"
              type="text"
              placeholder="A plush toy robot sitting against a yellow wall"
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />
          </Flex>
          <Box
            pos="relative"
            bg="gray.50"
            borderColor="gray.300"
            color="gray.900"
            fontSize="sm"
            rounded="lg"
            _focus={{ ringColor: "blue.500", borderColor: "blue.500" }}
            w="64"
            p="5"
            h="64"
            mt="10px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            boxShadow="xs"
          >
            {form.photo ? (
              <Image
                src={form.photo}
                name={form.prompt}
                w="full"
                h="full"
                objectFit="contain"
              />
            ) : (
              <Image
                src={preview}
                name="preview"
                w="9/12"
                h="9/12"
                objectFit="contain"
                opacity="40%"
              />
            )}

            {generatingImage && (
              <Flex
                pos="absolute"
                inset="5"
                justifyContent="center"
                alignItems="center"
                bg="rgba(0,0,0,0.5)"
                rounded="lg"
              >
                <Loader />
              </Flex>
            )}
          </Box>

          <Flex mt="5" gap="5">
            <Button
              type="button"
              onClick={generateImage}
              color="white"
              bg="green.700"
              fontSize="md"
              rounded="md"
              p={{ base: "5" }}
              w={{ base: "full", md: "auto" }}
              textAlign="center"
            >
              {generatingImage ? "Generating..." : "Generate"}
            </Button>
          </Flex>

          <Box mt="10">
            <Text mt="2" color="#666e75" fontSize="14px">
              Once you have created the image ou want, you can share it with
              other in the community
            </Text>
            <Button
              type="submit"
              color="white"
              colorScheme="purple"
              fontSize="md"
              rounded="md"
              mt="10px"
              p={{ base: "5" }}
              w={{ base: "full", md: "auto" }}
              textAlign="center"
            >
              {loading ? "Sharing..." : "Share with the community"}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default CreatePost;
