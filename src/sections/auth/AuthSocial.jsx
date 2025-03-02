import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { GithubLogo, GoogleLogo, TwitterLogo } from "phosphor-react";
import React from "react";

const AuthSocial = () => {
  return (
    <Box>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disabled",
          "&::before, ::after": {
            borderTopStyle: "dashed",
          },
        }}
      >
        OR
      </Divider>

      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={3}
      >
        <IconButton>
          <GoogleLogo color="#DF3E30" />
        </IconButton>
        <IconButton color="inherit">
          <GithubLogo />
        </IconButton>
        <IconButton>
          <TwitterLogo color="#1c9cea" />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default AuthSocial;
