"use client";

import _ from "lodash";

import Stack, { StackProps } from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Iconify } from "@/templates-ui/components/iconify";

import { useCallback, useState } from "react";

// ----------------------------------------------------------------------

const MENUS = [
  {
    value: "delete_all",
    label: "Delete All",
  },
] as const;

// ----------------------------------------------------------------------

export type NotificationHeadProps = StackProps & {
  isReadAll: boolean;
  onReadAll?: () => void;
  onClose?: () => void;
  menuHandlers?: {
    value: (typeof MENUS)[number]["value"];
    handler: () => void;
  }[];
};

export function NotificationHead({
  isReadAll,
  onReadAll,
  onClose,
  menuHandlers,
  sx,
  ...other
}: NotificationHeadProps) {
  const [isOpen, setOpen] = useState<null | HTMLElement>(null);

  const handleOpen = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setOpen(event.currentTarget);
    },
    []
  );

  const handleClose = useCallback(() => {
    setOpen(null);
  }, []);

  const handleItem = useCallback((key: (typeof MENUS)[number]["value"]) => {
    if (!menuHandlers || menuHandlers.length < 1) handleClose();

    const handler = menuHandlers?.find((x) => x.value === key)?.handler;
    if (!handler) handleClose();

    handler?.();
    handleClose();
  }, []);

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ py: 2, pl: 2.5, pr: 1, minHeight: 68 }}
      {...other}
    >
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Notifications
      </Typography>

      {!isReadAll && (
        <Tooltip title="Mark all as read">
          <IconButton color="primary" onClick={() => onReadAll?.()}>
            <Iconify icon="eva:done-all-fill" />
          </IconButton>
        </Tooltip>
      )}

      <IconButton
        onClick={() => onClose?.()}
        sx={{ display: { xs: "inline-flex", sm: "none" } }}
      >
        <Iconify icon="mingcute:close-line" />
      </IconButton>

      <IconButton onClick={handleOpen}>
        <Iconify icon="solar:settings-bold-duotone" />
      </IconButton>
      <Menu
        id="notification-menu"
        anchorEl={isOpen}
        onClose={handleClose}
        open={!!isOpen}
      >
        {MENUS.map(({ value, label }) => (
          <MenuItem
            key={value}
            selected={value === "delete_all"}
            onClick={() => handleItem(value)}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  );
}
