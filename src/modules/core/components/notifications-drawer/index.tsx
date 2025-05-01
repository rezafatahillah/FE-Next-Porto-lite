"use client";

import type { IconButtonProps } from "@mui/material/IconButton";

import { m } from "framer-motion";
import { toast } from "sonner";
import { useState, useCallback, useEffect, useContext } from "react";
import _ from "lodash";
import dayjs from "dayjs";

import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import SvgIcon from "@mui/material/SvgIcon";
import IconButton from "@mui/material/IconButton";

import { useBoolean } from "@/templates-ui/hooks/use-boolean";

import { varHover } from "@/templates-ui/components/animate";

import { MQTTContext } from "@/libs/notification/mqtt/provider";
import {
  INotificationEntity,
  INotificationStatisticEntity,
  NotificationQuery,
  useNotificationDeleteAll,
  useNotificationRead,
  useNotificationReadAll,
} from "@/libs/notification";

import { NotificationHead, NotificationHeadProps } from "./notification-head";
import { NotificationTab } from "./notification-tab";
import { NotificationList } from "./notification-list";
import { NotificationToast } from "./notification-toast";

// ----------------------------------------------------------------------

export type NotificationsDrawerProps = IconButtonProps & {};

export function NotificationsDrawer({
  sx,
  ...other
}: NotificationsDrawerProps) {
  const drawer = useBoolean();
  const message = useContext(MQTTContext);

  const [currentTab, setCurrentTab] =
    useState<keyof INotificationStatisticEntity["count"]>("all");

  const { data: statistic } = NotificationQuery.useStatistic({
    props: {},
  });

  const { data, isFetching, hasNextPage, fetchNextPage } =
    NotificationQuery.useInfiniteGetAll({
      props: {
        params: {
          perPage: 20,
        },
      },
    });

  const { onSubmit: onSubmitRead, isError: isErrorRead } = useNotificationRead(
    {}
  );
  const { onSubmit: onSubmitReadAll, isError: isErrorReadAll } =
    useNotificationReadAll({});
  const { onSubmit: onSubmitDeleteAll, isError: isErrorDeleteAll } =
    useNotificationDeleteAll({});

  const [notifications, setNotifications] = useState<INotificationEntity[]>([]);
  const [stats, setStats] = useState<INotificationStatisticEntity["count"]>({
    all: 0,
    unread: 0,
    read: 0,
  });

  const filterNotifications = notifications.filter((n) =>
    currentTab === "unread"
      ? n.readAt === null
      : currentTab === "read"
      ? n.readAt !== null
      : n
  );

  const handleDetectBottomScroll = useCallback(({ target }: Event) => {
    if (target instanceof Element) {
      const { scrollTop, scrollHeight, clientHeight } = target;
      const isBottom = scrollHeight - scrollTop <= clientHeight + 1;

      if (isBottom && hasNextPage && !isFetching) {
        fetchNextPage();
      }
    }
  }, []);

  useEffect(
    () => setNotifications(data?.pages.flatMap((n) => n.data) || []),
    [data]
  );

  useEffect(() => {
    if (statistic) {
      setStats(statistic.data.count);
    }
  }, [statistic]);

  // ----------------------------------------------------------------------

  const handleMarkAllAsRead = useCallback(() => {
    onSubmitReadAll();

    if (!isErrorReadAll) {
      setStats((prev) => ({
        ...prev,
        read: prev.all,
        unread: 0,
      }));

      setNotifications(
        notifications.map((notification) => ({
          ...notification,
          readAt: dayjs().toNow(),
        }))
      );
    }
  }, [notifications]);

  const handleMarkAsRead = useCallback(
    (n: INotificationEntity) => {
      const readed = notifications.find((x) => x.id === n.id);

      if (!readed?.readAt) {
        onSubmitRead(n);

        if (!isErrorRead) {
          setStats((prev) => ({
            ...prev,
            read: prev.read + 1,
            unread: prev.unread - 1,
          }));

          setNotifications(
            notifications.map((notification) =>
              notification.id === n.id
                ? {
                    ...notification,
                    readAt: dayjs().toNow(),
                  }
                : notification
            )
          );
        }
      }
    },
    [notifications]
  );

  const handleDeleteAll = useCallback(() => {
    onSubmitDeleteAll();

    if (!isErrorDeleteAll) {
      setStats({
        all: 0,
        unread: 0,
        read: 0,
      });

      setNotifications([]);
    }
  }, [notifications]);

  const menuHandlers: NotificationHeadProps["menuHandlers"] = [
    {
      value: "delete_all",
      handler: handleDeleteAll,
    },
  ];

  // ----------------------------------------------------------------------

  useEffect(() => {
    if (message) {
      toast.success(<NotificationToast notification={message} />);
      setStats((prev) => ({
        ...prev,
        all: prev.all + 1,
        unread: prev.unread + 1,
      }));
      setNotifications((prev) => [message, ...prev]);
    }
  }, [message]);

  // ----------------------------------------------------------------------

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={drawer.onTrue}
        sx={sx}
        {...other}
      >
        <Badge badgeContent={stats.unread} color="error">
          <SvgIcon>
            {/* https://icon-sets.iconify.design/solar/bell-bing-bold-duotone/ */}
            <path
              fill="currentColor"
              d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.794 25.794 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.393 4.393 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7"
              opacity="0.5"
            />
            <path
              fill="currentColor"
              d="M12.75 6a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0"
            />
          </SvgIcon>
        </Badge>
      </IconButton>

      <Drawer
        open={drawer.value}
        onClose={drawer.onFalse}
        anchor="right"
        slotProps={{ backdrop: { invisible: true } }}
        PaperProps={{ sx: { width: 1, maxWidth: 420 } }}
      >
        <NotificationHead
          isReadAll={stats.unread < 1}
          onReadAll={handleMarkAllAsRead}
          menuHandlers={menuHandlers}
        />

        <NotificationTab
          statistic={stats}
          onTabChange={(c) => setCurrentTab(c)}
        />

        <NotificationList
          notifications={filterNotifications}
          onRead={handleMarkAsRead}
          scroll={handleDetectBottomScroll}
        />
      </Drawer>
    </>
  );
}
