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
import { useDispatch } from "react-redux";
import { editUser } from "../../Redux/Auth/actionsRegister";
const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = JSON.parse(localStorage.getItem("User"));
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: user.name,
    email: user.email,
    mobile: user.mobile,
    proLink: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    resumeLink: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div className="profile">
      <div className="profileCon">
        <div className="profileImage">
          <img src={data.proLink} alt="avatar" />
          <p>{data.email}</p>
          <button onClick={onOpen}>EDIT PROFILE</button>
        </div>
        <div className="profileDetails">
          <h3>Profile Details</h3>
          <div>
            <p>Full Name </p>
            <p>{data.name}</p>
          </div>
          <div>
            <p>Mobile Number</p>
            <p>{data.mobile}</p>
          </div>
          <div>
            <p>Email</p>
            <p>{data.email}</p>
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
                <Input
                  placeholder="Picture link"
                  value={data.proLink}
                  name="proLink"
                  onChange={handlechange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Resume</FormLabel>
                <Input
                  placeholder="Resume Link"
                  value={data.resumeLink}
                  name="resumeLink"
                  onChange={handlechange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Enter name"
                  value={data.name}
                  name="name"
                  onChange={handlechange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Enter Email"
                  value={data.email}
                  name="email"
                  onChange={handlechange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Mobile</FormLabel>
                <Input
                  placeholder="Enter mobile number"
                  value={data.mobile}
                  name="mobile"
                  onChange={handlechange}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => {
                  dispatch(
                    editUser(
                      {
                        ...data,
                        id: user.id,
                        userId: user.userId,
                        role: user.role,
                      }
                    )
                  );
                  onClose();
                }}
                colorScheme="blue"
                mr={3}
              >
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
