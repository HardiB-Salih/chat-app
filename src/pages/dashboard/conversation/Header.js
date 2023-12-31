import { faker } from "@faker-js/faker";
import { Avatar, Badge, Box, Divider, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import { useTheme } from "@emotion/react";
import { dispatch } from "../../../redux/store";
import { ToggleSidebar } from "../../../redux/slices/app";
import { useDispatch } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
function Header() {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box
      p={2}
      sx={{
        backgroundColor:
          theme.palette.mode == "light"
            ? "#fBFBFB"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack
          onClick={() => dispatch(ToggleSidebar())}
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          sx={{
            cursor: "pointer",
          }}
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar src={faker.image.avatar()} alt="avatar" />
          </StyledBadge>
          <Stack sx={{ width: "100%" }}>
            <Typography variant="subtitle2">HardiB. Salih</Typography>
            <Typography variant="caption">Online</Typography>
          </Stack>
        </Stack>

        <Stack direction={"row"} alignItems={"center"} spacing={4}>
          <VideoCamera size={30} />
          <Phone size={30} />
          <MagnifyingGlass size={30} />
          <Divider orientation="vertical" variant="middle" flexItem />
          <CaretDown size={30} />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Header;
