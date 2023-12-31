import { Box, Fab, IconButton, InputBase, Stack, Tooltip } from "@mui/material";
import {
  Camera,
  File,
  Image,
  Paperclip,
  Smiley,
  Sticker,
  TelegramLogo,
  User,
} from "phosphor-react";
import { useTheme } from "@emotion/react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useState } from "react";

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];

const ChatInput = ({ setOpenpicker }) => {
  const [openActions, setOpenActions] = useState(false);

  return (
    <Stack
      px={1.5}
      py={0.3}
      direction="row"
      sx={{ backgroundColor: "#5D9AF630", flexGrow: 1 }}
      borderRadius={1.5}
      spacing={1}
    >
      <Stack sx={{ width: "max-content" }}>
        <Stack
          sx={{
            position: "relative",
            display: openActions ? "inline-block" : "none",
          }}
        >
          {Actions.map((el) => (
            <Tooltip placement="right" title={el.title}>
              <Fab
                sx={{
                  position: "absolute",
                  top: -el.y,
                  backgroundColor: el.color,
                }}
                aria-label="add"
              >
                {el.icon}
              </Fab>
            </Tooltip>
          ))}
        </Stack>

        <IconButton
          onClick={() => {
            setOpenActions(!openActions);
          }}
        >
          <Paperclip size={24} />
        </IconButton>
      </Stack>

      <InputBase fullWidth placeholder="Write a message..."></InputBase>
      <IconButton
        onClick={() => {
          setOpenpicker((prev) => !prev);
        }}
      >
        <Smiley size={24} />
      </IconButton>
    </Stack>
  );
};
function Footer() {
  const [openpicker, setOpenpicker] = useState(false);
  const theme = useTheme();

  return (
    <Box
      p={2}
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode == "light"
            ? "#fBFBFB"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack direction="row" spacing={2}>
        {/* Chat Input */}
        <Stack sx={{ width: "100%" }}>
          <Box
            sx={{
              display: openpicker ? "inline" : "none",
              zIndex: 10,
              position: "fixed",
              bottom: 80,
              right: 100,
            }}
          >
            <Picker
              theme={theme.palette.mode}
              data={data}
              onEmojiSelect={console.log}
            />
          </Box>

          <ChatInput setOpenpicker={setOpenpicker} />
        </Stack>

        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.2,
            width: "40px",
            height: "40px",
          }}
        >
          <IconButton sx={{ width: "max-content", color: "#fff" }}>
            <TelegramLogo size={24} />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
}

export default Footer;
