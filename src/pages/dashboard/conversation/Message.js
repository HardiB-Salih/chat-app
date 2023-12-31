import { Box, Stack } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Chat_History } from "../../../data";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  TimeLine,
} from "./MsgType";

function Message({ menu }) {
  const theme = useTheme();

  return (
    <Box
      p={3}
      width={"100%"}
      sx={{ flexGrow: 1, height: "100%", overflow: "scroll" }}
    >
      <Stack direction={"column"} spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              return <TimeLine el={el} />;

            case "msg":
              switch (el.subtype) {
                case "img":
                  // Images
                  return <MediaMsg el={el} menu={menu} />;

                case "doc":
                  // Doc
                  return <DocMsg el={el} menu={menu} />;

                case "link":
                  // Link
                  return <LinkMsg el={el} menu={menu} />;

                case "reply":
                  // reply
                  return <ReplyMsg el={el} />;

                default:
                  // Text Message
                  return <TextMsg el={el} menu={menu} />;
              }

            default:
              return null;
          }
        })}
      </Stack>
    </Box>
  );
}

export default Message;
