import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";

import { fToNow } from "@/templates-ui/utils/format-time";

import { CONFIG } from "@/config-global";
import { INotificationEntity } from "@/libs/notification";

// ----------------------------------------------------------------------

export function NotificationToast({
  notification,
}: {
  notification: INotificationEntity;
}) {
  const {
    data: { data: notificationMessage },
  } = notification;

  const renderAvatar = (
    <Box>
      {notificationMessage.avatarUrl ? (
        <Avatar
          src={notificationMessage.avatarUrl}
          sx={{ bgcolor: "background.neutral" }}
        />
      ) : (
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            bgcolor: "background.neutral",
          }}
        >
          <Box
            component="img"
            src={`${CONFIG.site.basePath}/assets/icons/notification/${
              (notificationMessage.type === "order" && "ic-order") ||
              (notificationMessage.type === "chat" && "ic-chat") ||
              (notificationMessage.type === "mail" && "ic-mail") ||
              (notificationMessage.type === "delivery" && "ic-delivery")
            }.svg`}
            sx={{ width: 24, height: 24 }}
          />
        </Stack>
      )}
    </Box>
  );

  const renderText = (
    <ListItemText
      disableTypography
      primary={reader(notificationMessage.title)}
      secondary={
        <Stack
          direction="row"
          alignItems="center"
          sx={{ typography: "caption", color: "text.disabled" }}
          divider={
            <Box
              sx={{
                width: 2,
                height: 2,
                bgcolor: "currentColor",
                mx: 0.5,
                borderRadius: "50%",
              }}
            />
          }
        >
          {fToNow(notification.createdAt)}
          {notificationMessage.category}
        </Stack>
      }
    />
  );

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        p: 1.5,
      }}
    >
      {renderAvatar}

      <Stack sx={{ flexGrow: 1 }}>{renderText}</Stack>
    </Stack>
  );
}

// ----------------------------------------------------------------------

function reader(data: string) {
  return (
    <Box
      dangerouslySetInnerHTML={{ __html: data }}
      sx={{
        mb: 0.5,
        "& p": { typography: "body2", m: 0 },
        "& a": { color: "inherit", textDecoration: "none" },
        "& strong": { typography: "subtitle2" },
      }}
    />
  );
}
