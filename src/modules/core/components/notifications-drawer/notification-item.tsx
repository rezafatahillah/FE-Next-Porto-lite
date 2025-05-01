import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";

import { fToNow } from "@/templates-ui/utils/format-time";

import { CONFIG } from "@/config-global";

import { Label } from "@/templates-ui/components/label";
import { FileThumbnail } from "@/templates-ui/components/file-thumbnail";
import React, { ReactNode } from "react";
import { INotificationEntity } from "@/libs/notification";

// ----------------------------------------------------------------------

export type NotificationItemProps = {
  notification: INotificationEntity;
  onClick?: (notification: INotificationEntity) => void;
};

export function NotificationItem({
  notification,
  onClick,
}: NotificationItemProps) {
  const {
    data: { data: notificationMessage },
  } = notification;

  const renderAvatar = (
    <ListItemAvatar>
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
    </ListItemAvatar>
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

  const renderBody = ({
    body,
    tags,
    actions,
  }: {
    body?: string | ReactNode;
    tags?: ReactNode[];
    actions?: ReactNode[];
  }) => (
    <Stack alignItems="flex-start">
      {body && (
        <Box
          sx={{
            p: 1.5,
            my: 1.5,
            borderRadius: 1.5,
            color: "text.secondary",
            bgcolor: "background.neutral",
          }}
        >
          {typeof body === "string" ? reader(body) : body}
        </Box>
      )}

      {tags && tags.length > 0 && (
        <Stack direction="row" spacing={0.75} flexWrap="wrap" sx={{ mt: 1.5 }}>
          {tags.map((tag) => tag)}
        </Stack>
      )}

      {actions && actions.length > 0 && (
        <Stack spacing={1} direction="row" sx={{ mt: 1.5 }}>
          {actions.map((action) => action)}
        </Stack>
      )}
    </Stack>
  );

  const renderUnReadBadge = !notification.readAt && (
    <Box
      sx={{
        top: 26,
        width: 8,
        height: 8,
        right: 20,
        borderRadius: "50%",
        bgcolor: "info.main",
        position: "absolute",
      }}
    />
  );

  const friendAction = (
    <Stack spacing={1} direction="row" sx={{ mt: 1.5 }}>
      <Button size="small" variant="contained">
        Accept
      </Button>
      <Button size="small" variant="outlined">
        Decline
      </Button>
    </Stack>
  );

  const projectAction = renderBody({
    body: `<p><strong>@Jaydon Frankie</strong> feedback by asking questions or just leave a note of appreciation.</p>`,
    actions: [
      <Button size="small" variant="contained" key={1}>
        Reply
      </Button>,
    ],
  });

  const fileAction = renderBody({
    body: (
      <>
        <FileThumbnail file="http://localhost:8080/httpsdesign-suriname-2015.mp3" />

        <Stack
          spacing={1}
          direction={{ xs: "column", sm: "row" }}
          flexGrow={1}
          sx={{ minWidth: 0 }}
        >
          <ListItemText
            disableTypography
            primary={
              <Typography
                variant="subtitle2"
                component="div"
                sx={{ color: "text.secondary" }}
                noWrap
              >
                design-suriname-2015.mp3
              </Typography>
            }
            secondary={
              <Stack
                direction="row"
                alignItems="center"
                sx={{ typography: "caption", color: "text.disabled" }}
                divider={
                  <Box
                    sx={{
                      mx: 0.5,
                      width: 2,
                      height: 2,
                      borderRadius: "50%",
                      bgcolor: "currentColor",
                    }}
                  />
                }
              >
                <span>2.3 GB</span>
                <span>30 min ago</span>
              </Stack>
            }
          />

          <Button size="small" variant="outlined">
            Download
          </Button>
        </Stack>
      </>
    ),
  });

  const tagsAction = renderBody({
    tags: [
      <Label variant="outlined" color="info" key="1">
        Design
      </Label>,
      <Label variant="outlined" color="warning" key="3">
        Dashboard
      </Label>,
      <Label variant="outlined" key="2">
        Design system
      </Label>,
    ],
  });

  const paymentAction = renderBody({
    actions: [
      <Button size="small" variant="contained" key={1}>
        Pay
      </Button>,
      <Button size="small" variant="outlined" key={2}>
        Decline
      </Button>,
    ],
  });

  return (
    <ListItemButton
      onClick={() => onClick?.(notification)}
      disableRipple
      sx={{
        p: 2.5,
        alignItems: "flex-start",
        borderBottom: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
      }}
    >
      {renderUnReadBadge}

      {renderAvatar}

      <Stack sx={{ flexGrow: 1 }}>
        {renderText}
        {notificationMessage.type === "friend" && friendAction}
        {notificationMessage.type === "project" && projectAction}
        {notificationMessage.type === "file" && fileAction}
        {notificationMessage.type === "tags" && tagsAction}
        {notificationMessage.type === "payment" && paymentAction}
      </Stack>
    </ListItemButton>
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
