"use client";

import { useState, useCallback, useEffect } from "react";
import _ from "lodash";

import Box from "@mui/material/Box";

import { Scrollbar, ScrollbarProps } from "@/templates-ui/components/scrollbar";

import { NotificationItem } from "./notification-item";

import { INotificationEntity } from "@/libs/notification";

// ----------------------------------------------------------------------

export type NotificationsListProps = ScrollbarProps & {
  notifications: INotificationEntity[];
  scroll?: (ev: Event) => void;
  onRead?: (n: INotificationEntity) => void;
};

export function NotificationList({
  notifications,
  scroll,
  onRead,
  sx,
  ...other
}: NotificationsListProps) {
  const [scrollableElement, setScrollableElement] =
    useState<HTMLDivElement | null>(null);

  const ref = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      setScrollableElement(node);
    }
  }, []);

  useEffect(() => {
    if (scrollableElement && scroll) {
      scrollableElement.addEventListener("scroll", scroll, {
        passive: true,
      });

      return () => {
        scrollableElement.removeEventListener("scroll", scroll);
      };
    }
  }, [scrollableElement]);

  // ----------------------------------------------------------------------

  return (
    <Scrollbar ref={ref} {...other}>
      <Box component="ul">
        {notifications?.map((n) => (
          <Box component="li" key={n.id} sx={{ display: "flex" }}>
            <NotificationItem
              notification={n}
              onClick={() => {
                onRead?.(n);
              }}
            />
          </Box>
        ))}
      </Box>
    </Scrollbar>
  );
}
