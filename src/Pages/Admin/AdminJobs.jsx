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
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../Redux/Jobs/actions";
import AdminNav from "./AdminNav";
const AdminJobs = () => {
  const Data = useSelector((store) => store.job.jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);
  return (
    <div>
      <AdminNav />
      <Tabs isFitted>
        <TabList mb="1em">
          <Tab>All Jobs</Tab>
          <Tab>Add Jobs</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TableContainer>
              <Table variant="striped" colorScheme="teal">
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Title</Th>
                    <Th>Edit Job</Th>
                    <Th isNumeric>Delete Job</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Data?.map((e) => {
                    return (
                      <Tr>
                        <Td>{e.jobId}</Td>
                        <Td>{e.title}</Td>
                        <Td>Edit</Td>
                        <Td isNumeric>Delete</Td>
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
                    <FormLabel>Job Title</FormLabel>
                    <Input mb="15px" type="text" name="title" />
                  </Box>
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Company</FormLabel>
                    <Input mb="15px" type="text" name="company" />
                  </Box>
                </Flex>
                <Flex
                  gap={{ base: 2, md: 10 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Experience</FormLabel>
                    <Input mb="15px" type="text" name="experience" />
                  </Box>
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>salary</FormLabel>
                    <Input mb="15px" type="text" name="salary" />
                  </Box>
                </Flex>
                <Flex
                  gap={{ base: 2, md: 10 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Location</FormLabel>
                    <Input mb="15px" type="text" name="location" />
                  </Box>
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Work Type</FormLabel>
                    <Input mb="15px" type="text" name="workType" />
                  </Box>
                </Flex>
                <Flex
                  gap={{ base: 2, md: 10 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Posted</FormLabel>
                    <Input mb="15px" type="text" name="posted" />
                  </Box>
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Applicants</FormLabel>
                    <Input mb="15px" type="text" name="Applicants" />
                  </Box>
                </Flex>
                <Flex
                  gap={{ base: 2, md: 10 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Designation</FormLabel>
                    <Input mb="15px" type="text" name="designation" />
                  </Box>
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Wage</FormLabel>
                    <Input mb="15px" type="text" name="wage" />
                  </Box>
                </Flex>
                <Flex
                  gap={{ base: 2, md: 10 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>City</FormLabel>
                    <Input mb="15px" type="text" name="city" />
                  </Box>
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>description</FormLabel>
                    <Input mb="15px" type="text" name="Description" />
                  </Box>
                </Flex>
                <Flex
                  gap={{ base: 2, md: 10 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>candidate</FormLabel>
                    <Input mb="15px" type="text" name="candidate" />
                  </Box>
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Role</FormLabel>
                    <Input mb="15px" type="text" name="Role" />
                  </Box>
                </Flex>
                <Flex
                  gap={{ base: 2, md: 10 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Industry Type</FormLabel>
                    <Input mb="15px" type="text" name="industryType" />
                  </Box>
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Functional Area</FormLabel>
                    <Input mb="15px" type="text" name="functionalArea" />
                  </Box>
                </Flex>
                <Flex
                  gap={{ base: 2, md: 10 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Employment Type</FormLabel>
                    <Input mb="15px" type="text" name="employmentType" />
                  </Box>
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Role Category</FormLabel>
                    <Input mb="15px" type="text" name="roleCategory" />
                  </Box>
                </Flex>
                {/* <Flex
                  gap={{ base: 2, md: 10 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Education</FormLabel>
                    <Input mb="15px" type="text" name="education" />
                  </Box>
                  <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel>Role Category</FormLabel>
                    <Input mb="15px" type="text" name="roleCategory" />
                  </Box>
                </Flex> */}

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
          {/* <TabPanel>
            <TableContainer>
              <Table variant="striped" colorScheme="teal">
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
          </TabPanel> */}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default AdminJobs;
