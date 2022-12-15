import { Box, Flex, Spacer, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./NavbarRegister.module.css";

const NavbarRegister = () => {
	const navigate = useNavigate();
	return (
		<div className={style.navbarMainDiv}>
			<Flex className={style.navbarBox}>
				<Box p="4">
					<Image
						src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
						alt="naukriLogo"
						onClick={() => navigate("/")}
					/>
				</Box>
				<Spacer />
				<Box p="4" className={style.alreadyRegistered}>
					Already Registered?{" "}
					<span
						onClick={() => navigate("/login")}
						style={{ color: "blue", cursor: "pointer" }}
					>
						Login
					</span>{" "}
					here
				</Box>
			</Flex>
		</div>
	);
};

export default NavbarRegister;