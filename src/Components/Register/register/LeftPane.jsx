import React from 'react'
import style from "./LeftPane.module.css";
import {
	Box,
	Image,
	Heading,
	List,
	ListIcon,
	ListItem,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const LeftPane = () => {
  return (
    <div>
        <div className={style.leftRegister}>
					<Box className={style.leftRegisterBox}>
						<Image
							src="https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg"
							alt="rImage"
							className={style.leftRegisterBoxImage}
						/>

						<Box className={style.leftRegisterSubBox}>
							<Heading size="md" className={style.leftRegisterBoxHeading}>
								On registering, you can
							</Heading>

							<List spacing={3}>
								<ListItem>
									<ListIcon as={MdCheckCircle} color="green.500" />
									Build your profile and let recruiters find you
								</ListItem>
								<ListItem>
									<ListIcon as={MdCheckCircle} color="green.500" />
									Get job postings delivered right to your email
								</ListItem>
								<ListItem>
									<ListIcon as={MdCheckCircle} color="green.500" />
									Find a job and grow your career
								</ListItem>
							</List>
						</Box>
					</Box>
				</div>
    </div>
  )
}

export default LeftPane

