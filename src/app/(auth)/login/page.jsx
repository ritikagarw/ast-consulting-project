"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function SimpleCard() {
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [isClient, setIsClient] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    isClient && (
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack
          spacing={8}
          mx={"auto"}
          maxW={"lg"}
          py={12}
          px={6}
          width={"464px"}
        >
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in</Heading>
          </Stack>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box rounded={"lg"} boxShadow={"lg"} p={8}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    {...register("email", { required: true, maxLength: 30 })}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <span role="alert" style={{ color: "red" }}>
                      This is required
                    </span>
                  )}
                  {errors.email && errors.email.type === "maxLength" && (
                    <span role="alert" style={{ color: "red" }}>
                      Max length exceeded
                    </span>
                  )}
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    {...register("password", { required: true, maxLength: 10 })}
                  />
                  {errors.password && errors.password.type === "required" && (
                    <span role="alert" style={{ color: "red" }}>
                      This is required
                    </span>
                  )}
                  {errors.password && errors.password.type === "maxLength" && (
                    <span role="alert" style={{ color: "red" }}>
                      Max length exceeded
                    </span>
                  )}
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Text color={"blue.400"} ml={10}>
                      Forgot password?
                    </Text>
                  </Stack>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    type="submit"
                  >
                    Sign in
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    New user?{" "}
                    <Link href="/signup" color={"blue.400"}>
                      Sign Up
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </form>
        </Stack>
      </Flex>
    )
  );
}
