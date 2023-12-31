import { useTheme } from "@emotion/react";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Slide,
  Stack,
  Switch,
  Typography,
  styled,
} from "@mui/material";
import {
  ArrowRight,
  Bell,
  CaretRight,
  Flag,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToggleSidebar, UpdateSidebarType } from "../../../redux/slices/app";
import { faker } from "@faker-js/faker";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function BlockDialogSlide({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Block this Contact</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to Block this contact
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
}
function DeleteDialogSlide({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Delete this Contact</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to Delete this contact
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
}

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [openBlock, setOpenBlock] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const handleClickOpenBlock = () => {
    setOpenBlock(true);
  };
  const handleCloseBlock = () => {
    setOpenBlock(false);
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
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton onClick={() => dispatch(ToggleSidebar())}>
              <X />
            </IconButton>
          </Stack>
        </Box>

        {/* Body */}

        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={3}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Avatar
              sx={{ width: 64, height: 64 }}
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

          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <Phone size={24} />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <VideoCamera size={24} />
              </IconButton>

              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="artical">About</Typography>
            <Typography variant="body2">imagin is the only Limit</Typography>
          </Stack>
          <Divider />
          <Stack spacing={3}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="subtitle2">Media, link and Docs</Typography>
              <Button
                onClick={() => dispatch(UpdateSidebarType("SHARED"))}
                endIcon={<CaretRight />}
              >
                400
              </Button>
            </Stack>

            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              {[1, 2, 3].map((el) => (
                <Box borderRadius={1} overflow={"hidden"}>
                  <img src={faker.image.image()} alt="someting" />
                </Box>
              ))}
            </Stack>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Star size={21} />
              <Typography variant="subtitle2">Starreded Messages</Typography>
            </Stack>

            <IconButton onClick={() => dispatch(UpdateSidebarType("STARRED"))}>
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Bell size={21} />
              <Typography variant="subtitle2">Stareded Messages</Typography>
            </Stack>
            <AntSwitch />
          </Stack>

          <Divider />

          <Typography>1 group in common</Typography>

          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Avatar
              sx={{ width: 64, height: 64 }}
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
            />
            <Stack spacing={0.5}>
              <Typography variant="artical" fontWeight={600}>
                Coding Mock
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                Owl, rabbit, Parriat
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Button
              onClick={handleClickOpenBlock}
              startIcon={<Prohibit />}
              fullWidth
              variant="outlined"
            >
              Block
            </Button>

            <Button
              startIcon={<Trash />}
              fullWidth
              variant="outlined"
              onClick={handleClickOpenDelete}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <BlockDialogSlide open={openBlock} handleClose={handleCloseBlock} />
      <DeleteDialogSlide open={openDelete} handleClose={handleCloseDelete} />
    </Box>
  );
};

export default Contact;
