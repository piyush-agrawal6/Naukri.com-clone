import { Box, Button, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";

import style from "./LoginPage.module.css";
import { TiTick } from "react-icons/ti";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <div className={style.loginPageDivs}>
        <Box className={style.loginPageBox}>
          <div>
            <Heading size="md" py="2">
              New to Naukri?
            </Heading>

            <div>
              <Icon as={TiTick} color="green" />
              <span>One click apply using naukri profile.</span>
            </div>
            <div>
              <Icon as={TiTick} color="green" />
              <span>Get relevant job recommendations.</span>
            </div>
            <div>
              <Icon as={TiTick} color="green" />
              <span>Showcase profile to top companies and consultants.</span>
            </div>
            <div>
              <Icon as={TiTick} color="green" />
              <span>Know application status on applied jobs.</span>
            </div>
            <Link to="/register">
              <Button my="3" colorScheme="blue" variant="outline">
                Register for free
              </Button>
            </Link>
          </div>

          <div className={style.loginPageImageDiv}>
            <Image
              src="https://static.naukimg.com/s/5/105/i/register.png"
              alt="loginImage"
            />
          </div>
        </Box>

        <Box className={style.loginPageBoxForm}>
          <LoginForm />
        </Box>
      </div>
    </div>
  );
};

export default LoginPage;
