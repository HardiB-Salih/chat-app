import {
  Box,
  Divider,
  IconButton,
  InputBase,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { MagnifyingGlass, Plus } from "phosphor-react";
import ChatElement from "../chat/ChatElement";
import { ChatList } from "../../../data";
import { SimpleBarStyle } from "../../../components/Scrollbar";
import { useState } from "react";
import CreateGroupDialog from "../../../sections/main/CreateGroupDialog";

const GroupChat = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: 320,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fafafa"
              : theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack py={2} spacing={3} sx={{ height: "100vh" }}>
          <Stack
            px={3}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h4">Group</Typography>
          </Stack>
          <Box px={3}>
            <Box
              py={0.8}
              px={1.2}
              sx={{
                width: "100%",
                backgroundColor: "#5D9AF630",
                borderRadius: 1.5,
              }}
            >
              <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
                <MagnifyingGlass size={24} />
                <InputBase placeholder="Search..." sx={{ width: "100%" }} />
              </Stack>
            </Box>
          </Box>

          <Stack px={3} spacing={1}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography
                variant="subtitle2"
                sx={{ cursor: "pointer" }}
                component={Link}
                onClick={handleClickOpen}
              >
                Create new group
              </Typography>
              <IconButton onClick={handleClickOpen}>
                <Plus size={20} style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
          </Stack>

          <Stack
            direction={"column"}
            sx={{
              flex: 1,
              overflow: "scroll",
              height: "100%",
            }}
          >
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              <Stack spacing={2.4}>
                <Stack px={3} spacing={2.4}>
                  <Typography variant="subtitle2">Pinned</Typography>
                  {ChatList.filter((el) => el.pinned).map((el) => {
                    return <ChatElement {...el} />;
                  })}
                </Stack>

                <Stack px={3} spacing={2.4}>
                  <Typography variant="subtitle2">All Groups</Typography>
                  {ChatList.filter((el) => !el.pinned).map((el) => {
                    return <ChatElement {...el} />;
                  })}
                </Stack>
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
        <CreateGroupDialog open={open} handleClose={handleClose} />
      </Box>
    </>
  );
};

export default GroupChat;
