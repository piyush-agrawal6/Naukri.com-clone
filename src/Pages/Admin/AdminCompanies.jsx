import React from "react";
import AdminNav from "./AdminNav";

import {
  Tab,
  Tabs,
  Table,
  TableCaption,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
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
} from "@chakra-ui/react";

const AdminCompanies = () => {
  return (
    <div>
      <AdminNav />
      <Tabs isFitted>
        <TabList mb="1em">
          <Tab>All Companies</Tab>
          <Tab>Add Company</Tab>
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
          <TabPanel>
            <FormControl margin="auto" width="90%" bg="white" id="form">
              <Box p={8}>
                <Flex
                  gap={{ base: 2, md: 10 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Product Name</FormLabel>
                    <Input
                      mb="15px"
                      type="text"
                      placeholder="Product name"
                      name="name"
                    />
                  </Box>
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Image Url</FormLabel>
                    <Input
                      mb="15px"
                      type="url"
                      placeholder="Product image url"
                      name="imageUrl"
                    />
                  </Box>
                </Flex>
                <Flex
                  gap={{ base: 2, md: 10 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Category</FormLabel>
                    <Input
                      mb="15px"
                      type="text"
                      placeholder="product category"
                      name="category"
                    />
                  </Box>
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Brand</FormLabel>
                    <Input
                      mb="15px"
                      type="text"
                      placeholder="enter brand name"
                      name="brand"
                    />
                  </Box>
                </Flex>
                <Flex
                  gap={{ base: 2, md: 10 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Reviews</FormLabel>
                    <Input
                      mb="15px"
                      type="number"
                      placeholder="No. of Reviews"
                      name="numReviews"
                    />
                  </Box>
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Rating</FormLabel>
                    <Input
                      mb="15px"
                      type="text"
                      placeholder="enter rating"
                      name="stars"
                    />
                  </Box>
                </Flex>
                <Flex
                  gap={{ base: 2, md: 10 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Type</FormLabel>
                    <Input
                      mb="15px"
                      type="text"
                      placeholder="Enter product type"
                      name="type"
                    />
                  </Box>
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Price</FormLabel>
                    <Input
                      mb="15px"
                      type="number"
                      placeholder="Product price in $"
                      name="price"
                    />
                  </Box>
                </Flex>

                <br />
                <Flex justifyContent="center" gap={2}>
                  <Button colorScheme="teal" type="submit">
                    submit
                  </Button>

                  <Button colorScheme="red" type="button">
                    reset
                  </Button>
                </Flex>
              </Box>
            </FormControl>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default AdminCompanies;
