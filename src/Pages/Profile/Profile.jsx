import React, { useState } from "react";
import "./Profile.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  Button,
  useDisclosure,
  Select,
} from "@chakra-ui/react";
const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="profile">
      <div className="profileCon">
        <div className="profileImage">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            alt="avatar"
          />
          <p>agrawaljoy1@gmail.com</p>
          <button onClick={onOpen}>EDIT PROFILE</button>
        </div>
        <div className="profileDetails">
          <h3>Profile Details</h3>
          <div>
            <p>Full Name </p>
            <p>Piyush Agrawal</p>
          </div>
          <div>
            <p>Mobile Number</p>
            <p>Piyush Agrawal</p>
          </div>
          <div>
            <p>Email</p>
            <p>Piyush Agrawal</p>
          </div>
          <div>
            <p>Gender</p>
            <p>Piyush Agrawal</p>
          </div>
        </div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Profile Picture</FormLabel>
                <Input placeholder="Picture link" />
              </FormControl>
              <FormControl>
                <FormLabel>Resume</FormLabel>
                <Input placeholder="Resume Link" />
              </FormControl>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input placeholder="First name" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input placeholder="Enter Email" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Mobile</FormLabel>
                <Input placeholder="Enter mobile number" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Gender</FormLabel>
                <Select placeholder="Select Gender">
                  <option value="option1">Male</option>
                  <option value="option2">Female</option>
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose} colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Profile;
