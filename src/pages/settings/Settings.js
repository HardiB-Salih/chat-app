import { useTheme } from "@emotion/react";
import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  Bell,
  CaretLeft,
  Image,
  Info,
  Key,
  Keyboard,
  Note,
  PencilCircle,
  Lock,
} from "phosphor-react";
import React, { useState } from "react";
import ShortcutDialog from "../../sections/settings/ShortcutDialog";
import ThemeDialog from "../../sections/settings/ThemeDialog";

const Settings = () => {
  const theme = useTheme();
  const [openShortcut, setOpenShortcut] = useState(false);
  const [openTheme, setOpenTheme] = useState(false);

  const handleClickOpenShortcut = () => {
    setOpenShortcut(true);
  };
  const handleCloseShortcut = () => {
    setOpenShortcut(false);
  };

  const handleClickOpenTheme = () => {
    setOpenTheme(true);
  };
  const handleCloseTheme = () => {
    setOpenTheme(false);
  };

  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      onclick: handleClickOpenTheme,
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      onclick: handleClickOpenShortcut,
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => {},
    },
  ];

  return (
    <>
      <Stack direction={"row"} width={"100%"}>
        {/* Left Pannel */}
        <Box
          sx={{
            overflowY: "scroll",
            height: "100vh",
            width: 320,
            backgroundColor:
              theme.palette.mode == "light"
                ? "#fBFBFB"
                : theme.palette.background.paper,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={4} spacing={5}>
            {/* Heading Section */}
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <IconButton>
                <CaretLeft />
              </IconButton>
              <Typography variant="h5">Settings</Typography>
            </Stack>
            {/* Profile Section */}
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Avatar
                sx={{ width: 56, height: 56 }}
                src={faker.image.avatar()}
                alt={faker.name.firstName()}
              />
              <Stack spacing={0.5}>
                <Typography variant="artical" fontWeight={600}>
                  {faker.name.fullName()}
                </Typography>
                <Typography variant="body2" fontWeight={500}>
                  {faker.phone.number("501-###-###")}
                </Typography>
              </Stack>
            </Stack>
            {/* List of Options */}
            <Stack spacing={4}>
              {list.map((pl, index) => (
                <Stack
                  key={index}
                  sx={{ cursor: "pointer" }}
                  onClick={pl.onclick}
                  spacing={2}
                >
                  <Stack direction={"row"} spacing={3}>
                    {pl.icon}
                    <Typography variant="subtitle2">{pl.title}</Typography>
                  </Stack>
                  {pl.key !== 7 && <Divider />}
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Box>
        {/* RightPannel */}
      </Stack>
      <ShortcutDialog open={openShortcut} handleClose={handleCloseShortcut} />
      <ThemeDialog open={openTheme} handleClose={handleCloseTheme} />
    </>
  );
};

export default Settings;
