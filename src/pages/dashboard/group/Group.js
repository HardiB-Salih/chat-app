import React from "react";
import { Box, Stack, useTheme } from "@mui/material";
import Conversation from "../conversation/Conversation";
import Contact from "../contact_shared_starred/Contact";
import { useSelector } from "react-redux";
import ShareMessages from "../contact_shared_starred/ShareMessages";
import StarrededMessages from "../contact_shared_starred/StarrededMessages";
import GroupChat from "./GroupChat";

const Group = () => {
  const theme = useTheme();
  const app = useSelector((store) => store.app);

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <GroupChat />

      <Box
        sx={{
          height: "100vh",
          width: app.sideBar.open
            ? "calc(100vw - 740px)"
            : "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode == "light"
              ? "#F0F4FA"
              : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>

      {/* CONTACT, STARRED, SHARED */}
      {app.sideBar.open &&
        (() => {
          switch (app.sideBar.type) {
            case "CONTACT":
              return <Contact />;
            case "STARRED":
              return <StarrededMessages />;
            case "SHARED":
              return <ShareMessages />;
            default:
              return <></>;
          }
        })()}
    </Stack>
  );
};

export default Group;
