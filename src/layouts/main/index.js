import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";

const MainLayout = () => {
  return (
    <Box height="100vh" maxHeight={"100%"}>
      <Container
        sx={{
          mt: 5,
        }}
        maxWidth="sm"
      >
        <Stack spacing={5}>
          <Stack
            sx={{ width: "100%" }}
            direction={"column"}
            alignItems={"center"}
          >
            <img
              style={{
                width: 120,
                height: 120,
              }}
              src={Logo}
              alt="Logo"
            />
          </Stack>
        </Stack>

        <Outlet />
      </Container>
    </Box>
  );
};

export default MainLayout;
