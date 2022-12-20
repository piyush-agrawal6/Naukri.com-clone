import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import {
  Tab,
  Table,
  TableCaption,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUsers,
  editRole,
  getUsers,
  registerAPI,
} from "../../Redux/Auth/actionsRegister";

const AdminUsers = () => {
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
  const toast = useToast();
  const handleRegFormSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAPI({ ...regCreds, userId: Date.now() }));
    dispatch(getUsers());
    toast({
      title: "User added successfully",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
    setRegCreds({
      name: "",
      email: "",
      password: "",
      mobile: "",
      role: "user",
    });
  };

  const Data = useSelector((store) => store.auth.users);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    let role = e.role === "user" ? "admin" : "user";
    dispatch(editRole({ ...e, role }));
    dispatch(getUsers());
  };
  const handleDelete = (e) => {
    dispatch(deleteUsers(e.id));
    dispatch(getUsers());
  };
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, Data]);
  return (
    <div>
      <AdminNav />
      <Tabs isFitted>
        <TabList mb="1em">
          <Tab>All Users</Tab>
          <Tab>Add Users</Tab>
          {/* <Tab>Admins</Tab> */}
        </TabList>
        <TabPanels>
          <TabPanel>
            <TableContainer>
              <Table variant="striped" colorScheme="teal">
                <TableCaption>
                  Imperial to metric conversion factors
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Name</Th>
                    <Th>Role</Th>
                    <Th>Edit Role</Th>
                    <Th isNumeric>Delete User</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Data.map((e) => {
                    return (
                      <Tr>
                        <Td>{e.userId}</Td>
                        <Td>{e.name}</Td>
                        <Td>{e.role}</Td>
                        <Td onClick={() => handleClick(e)}>Edit</Td>
                        <Td onClick={() => handleDelete(e)} isNumeric>
                          Delete
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Total Jobs</Th>
                    <Th></Th>
                    <Th></Th>
                    <Th isNumeric>5</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel>
            <FormControl margin="auto" width="90%" bg="white" id="form">
              <Box p={8}>
                <Flex
                  gap={{ base: 2, md: 10 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Name</FormLabel>
                    <Input
                      mb="15px"
                      type="text"
                      name="name"
                      value={regCreds.name}
                      onChange={handleRegChange}
                    />
                  </Box>
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      mb="15px"
                      type="email"
                      name="email"
                      value={regCreds.email}
                      onChange={handleRegChange}
                    />
                  </Box>
                </Flex>
                <Flex
                  gap={{ base: 2, md: 10 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Password</FormLabel>
                    <Input
                      mb="15px"
                      type="text"
                      name="password"
                      value={regCreds.password}
                      onChange={handleRegChange}
                    />
                  </Box>
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Mobile</FormLabel>
                    <Input
                      mb="15px"
                      type="text"
                      name="mobile"
                      value={regCreds.mobile}
                      onChange={handleRegChange}
                    />
                  </Box>
                </Flex>
                <br />
                <Flex justifyContent="center" gap={2}>
                  <Button
                    colorScheme="teal"
                    type="submit"
                    onClick={handleRegFormSubmit}
                  >
                    submit
                  </Button>
                </Flex>
              </Box>
            </FormControl>
          </TabPanel>
          <TabPanel>
            <TableContainer>
              <Table variant="striped" colorScheme="teal">
                <TableCaption>
                  Imperial to metric conversion factors
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Title</Th>
                    <Th>Edit Job</Th>
                    <Th isNumeric>Delete Job</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>1</Td>
                    <Td>Web Developer</Td>
                    <Td>Edit</Td>
                    <Td isNumeric>Delete</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Total Jobs</Th>
                    <Th></Th>
                    <Th></Th>
                    <Th isNumeric>5</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default AdminUsers;
