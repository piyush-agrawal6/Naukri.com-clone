import {
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import style from "./LoginPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { getUsers, loginUser } from "../../Redux/Auth/actionsRegister";
const LoginForm = () => {
  let users = useSelector((store) => store.auth.users);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const toast = useToast();
  const [loginCreds, setLoginCreds] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({ ...loginCreds, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    if (loginCreds.password === "" || loginCreds.email === "") {
      return toast({
        title: "Email or password missing.",
        description: "Please enter all the required fields",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
    e.preventDefault();
    let user = users.find((e) => e.email === loginCreds.email);
    console.log(users);
    if (user) {
      if (user.password === loginCreds.password) {
        dispatch(loginUser());
        toast({
          title: "User Logged in successfully",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
        localStorage.setItem("User", JSON.stringify(user));
        if (user.role == "user") {
          localStorage.setItem("userRole", JSON.stringify(false));
        } else if (user.role == "admin") {
          localStorage.setItem("userRole", JSON.stringify(true));
        }
        return navigate("/");
      } else {
        return toast({
          title: "Password is incorrect",
          description: "Please enter a correct password.",
          status: "error",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
    } else {
      return toast({
        title: "User not found",
        description: "Please register to create an account.",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div>
      <Heading size="md">Login</Heading>

      <form action="submit">
        <FormControl className={style.formLogin} isRequired>
          <div>
            <FormLabel fontSize="sm" htmlFor="email">
              Email ID
            </FormLabel>
            <Input
              value={loginCreds.email}
              onChange={handleLoginChange}
              type="email"
              name="email"
              placeholder="Enter Email ID"
            />
          </div>

          <div>
            <FormLabel fontSize="sm" htmlFor="password">
              Password
            </FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                placeholder="Enter password"
                name="password"
                value={loginCreds.password}
                onChange={handleLoginChange}
              />
            </InputGroup>
          </div>

          <div>
            <Button
              colorScheme="blue"
              my="5"
              w="300px"
              type="submit"
              onClick={handleLoginSubmit}
            >
              Login
            </Button>
          </div>

          <div className={style.googleDividerDiv}>
            <Divider />
            <div className={style.GoogleDividerORLogin}>OR</div>
            <Button
              className={style.GoogleButton}
              leftIcon={<FcGoogle />}
              colorScheme="blue"
              variant="outline"
              borderRadius="20px"
            >
              Sign in with Google
            </Button>
          </div>
        </FormControl>
      </form>
    </div>
  );
};

export default LoginForm;
