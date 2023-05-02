import { Badge, Box, Button, Flex, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <Box>
      <Flex alignItems="center" gap="2" mt="5">
        <FormLabel htmlFor={name}>{labelName}</FormLabel>

        {isSurpriseMe && (
          <Badge
            mt="-1"
            p="1"
            type="button"
            onClick={handleSurpriseMe}
            bg="#ECECF1"
            color="black"
            as={"button"}
            rounded="md"
            _hover={{ color: "gray.700", bg: "#ececf1e8" }}
          >
            Surprise me
          </Badge>
        )}
      </Flex>

      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        bg="gray.50"
        borderColor="gray.300"
        color="gray.900"
        fontSize="sm"
        rounded="lg"
        _active={false}
        boxShadow="xs"
        _focus={{
          borderColor: "#4649ff",
          outline: "none",
          display: "block",
          w: "full",
          p: "3",
          ringColor: "#4649ff",
        }}
      />
    </Box>
  );
};

export default FormField;
