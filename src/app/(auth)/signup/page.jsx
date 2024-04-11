"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
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
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      {...register("f_name", { required: true, maxLength: 20 })}
                    />
                    {errors.f_name && errors.f_name.type === "required" && (
                      <span role="alert" style={{ color: "red" }}>
                        This is required
                      </span>
                    )}
                    {errors.f_name && errors.f_name.type === "maxLength" && (
                      <span role="alert" style={{ color: "red" }}>
                        Max length exceeded
                      </span>
                    )}
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      {...register("l_name", { required: true, maxLength: 20 })}
                    />
                    {errors.l_name && errors.l_name.type === "required" && (
                      <span role="alert" style={{ color: "red" }}>
                        This is required
                      </span>
                    )}
                    {errors.l_name && errors.l_name.type === "maxLength" && (
                      <span role="alert" style={{ color: "red" }}>
                        Max length exceeded
                      </span>
                    )}
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
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
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
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
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link href="/login" color={"blue.400"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
}
