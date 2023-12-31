import { useTheme } from "@emotion/react";
import { Box, IconButton, Stack } from "@mui/material";
import { ArrowLeft } from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../../../redux/slices/app";
import Message from "../conversation/Message";

const StarrededMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        height: "100vh",
        width: 320,
        backgroundColor:
          theme.palette.mode == "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
      }}
    >
      <Stack sx={{ height: "100%" }}>
        {/* Header */}
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode == "light"
                ? "#fBFBFB"
                : theme.palette.background.paper,
          }}
        >
          <Stack
            direction={"row"}
            sx={{ height: "100%", p: 2 }}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={2}
          >
            <IconButton onClick={() => dispatch(UpdateSidebarType("CONTACT"))}>
              <ArrowLeft />
            </IconButton>
          </Stack>
        </Box>
        {/* Body */}
        <Message />
      </Stack>
    </Box>
  );
};

export default StarrededMessages;
