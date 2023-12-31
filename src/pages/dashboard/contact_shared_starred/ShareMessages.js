import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  useTheme,
} from "@mui/material";
import { ArrowLeft } from "phosphor-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../../../redux/slices/app";
import { faker } from "@faker-js/faker";
import { Shared_Docs, Shared_Links } from "../../../data";
import { DocMsg, LinkMsg } from "../conversation/MsgType";

function MediaContent() {
  return (
    <Grid container spacing={1}>
      {[0, 1, 2, 3, 4, 5, 6].map((_, index) => (
        <Grid item xs={4} key={index}>
          <Box borderRadius={1} overflow={"hidden"}>
            <img src={faker.image.avatar()} alt="Alnimal" />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

function DocsContent() {
  return (
    <Stack spacing={2} alignItems={"center"}>
      {Shared_Docs.map((el) => (
        <DocMsg el={el} />
      ))}
    </Stack>
  );
}

const ShareMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderContent = (value) => {
    switch (value) {
      case 0:
        return <MediaContent />; // Replace with your actual media component
      case 1:
        return Shared_Links.map((el) => <LinkMsg el={el} />); // Replace with your actual links component
      case 2:
        return <DocsContent />; // Replace with your actual docs component
      default:
        return null;
    }
  };

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
        <Tabs
          sx={{ px: 2, py: 1 }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>

        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={value === 1 ? 1 : 2}
        >
          {renderContent(value)}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ShareMessages;
