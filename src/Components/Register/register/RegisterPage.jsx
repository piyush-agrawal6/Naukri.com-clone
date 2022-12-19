import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputLeftAddon,
  InputGroup,
  Text,
  Flex,
  Checkbox,
  Button,
  Stack,
  Divider,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from "./Register.module.css";
import NavbarRegister from "../NavAndFooter/NavbarRegister";
import FooterRegister from "../NavAndFooter/FooterRegister";
import LeftPane from "./LeftPane";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, registerAPI } from "../../../Redux/Auth/actionsRegister";

const RegisterPage = () => {
  const { isReg, users } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const toast = useToast();
  const [regCreds, setRegCreds] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    role: "user",
  });

  const handleRegChange = (e) => {
    const { name, value } = e.target;
    setRegCreds({
      ...regCreds,
      [name]: value,
    });
  };
  console.log(users);
  const handleRegFormSubmit = (e) => {
    e.preventDefault();
    if (
      regCreds.email == "" ||
      regCreds.password == "" ||
      regCreds.mobile == "" ||
      regCreds.name == ""
    ) {
      return toast({
        title: "Email or password missing.",
        description: "Please enter all the required fields",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
    let user = users.find((el) => el.email === regCreds.email);
    if (user) {
      toast({
        title: "User already exist . Please Login",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
      return navigate("/login");
    } else {
      dispatch(registerAPI({ ...regCreds, userId: Date.now() }));
      return toast({
        title: "Registration Successful",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  if (isReg) {
    return navigate("/login");
  }
  return (
    <>
      <NavbarRegister />

      <div className={style.contentRegister}>
        <LeftPane />
        <div>
          <div className={style.rightRegister}>
            <Box className={style.rightRegisterBox}>
              <Heading size="lg" mb="5">
                Find a job & grow your career
              </Heading>

              <form action="submit" onSubmit={handleRegFormSubmit}>
                <FormControl className={style.rightRegisterForm}>
                  <div>
                    <FormLabel htmlFor="fullName">Name</FormLabel>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="What is your name?"
                      name="name"
                      value={regCreds.name}
                      onChange={handleRegChange}
                      isRequired
                    />
                  </div>
                  <div>
                    <FormLabel htmlFor="email">Email id</FormLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Tell us your Email ID"
                      name="email"
                      value={regCreds.email}
                      onChange={handleRegChange}
                      isRequired
                    />
                    <FormHelperText>
                      We'll send you relevant jobs in your mail
                    </FormHelperText>
                  </div>
                  <div>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a password for your account"
                      name="password"
                      value={regCreds.password}
                      onChange={handleRegChange}
                      isRequired
                    />
                    <FormHelperText>
                      Minimum 6 characters required
                    </FormHelperText>
                  </div>
                  <div>
                    <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
                    <InputGroup>
                      <InputLeftAddon children="+91" bg="white" />
                      <Input
                        type="tel"
                        placeholder="Mobile Number"
                        name="mobile"
                        value={regCreds.mobile}
                        onChange={handleRegChange}
                        isRequired
                      />
                    </InputGroup>
                    <FormHelperText>
                      Recruiters will call you on this number
                    </FormHelperText>
                  </div>
                  <div>
                    <FormLabel htmlFor="resume">Resume</FormLabel>

                    <div className={style.rightRegisterBoxInputDiv}>
                      <label
                        htmlFor="files"
                        className={style.rightRegisterBoxInputBtn}
                      >
                        Upload Resume
                      </label>
                      <input
                        id="files"
                        type="file"
                        className={style.rightRegisterBoxInput}
                      />
                      {/* </div> */}
                      <div>
                        <Text fontSize="xs" p="2" color="#8d8aad">
                          DOC, DOCx, PDF, RTF | Max: 2 MB
                        </Text>
                      </div>
                    </div>
                    <FormHelperText>
                      Recruiters give first preference to candidates who have a
                      resume
                    </FormHelperText>
                  </div>
                  <div>
                    <Button colorScheme="blue" borderRadius="20" type="submit">
                      Register Now
                    </Button>
                  </div>
                  Already registered?
                  <div>
                    <Link to="/login">
                      <Button
                        colorScheme="blue"
                        borderRadius="20"
                        type="submit"
                      >
                        Login
                      </Button>
                    </Link>
                  </div>
                </FormControl>
              </form>
            </Box>
          </div>
          <FooterRegister />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
