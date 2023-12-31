import styled from "@emotion/styled";
import { faker } from "@faker-js/faker";
import { Avatar, Badge, Box, Stack, Typography, useTheme } from "@mui/material";

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

function ChatElement({ id, img, name, msg, time, unread, pinned, online }) {
  const theme = useTheme();

  return (
    <>
      <Box
        key={id}
        p={1}
        sx={{
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
          width: "100%",
          borderRadius: 1.5,
          boxShadow: theme.shadows[1],
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={2}
        >
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={img} alt={`${name} avatar`} />
            </StyledBadge>
          ) : (
            <Avatar src={img} alt={`${name} avatar`} />
          )}

          <Stack spacing={0.3} sx={{ width: "100%" }}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
          <Stack justifyContent={"space-between"} alignItems={"center"}>
            <Typography sx={{ fontWeight: 600 }}>{time}</Typography>
            <Box>
              <Badge color="primary" badgeContent={unread} />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default ChatElement;
