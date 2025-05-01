"use client";

import { useState, useCallback } from "react";
import _ from "lodash";

import Tab from "@mui/material/Tab";

import { Label } from "@/templates-ui/components/label";
import {
  CustomTabs,
  CustomTabsProps,
} from "@/templates-ui/components/custom-tabs";

import { INotificationStatisticEntity } from "@/libs/notification";

// ----------------------------------------------------------------------

const TABS: {
  value: keyof INotificationStatisticEntity["count"];
  label: string;
  count: number;
}[] = [
  { value: "all", label: "All", count: 0 },
  { value: "unread", label: "Unread", count: 0 },
  { value: "read", label: "Read", count: 0 },
];

// ----------------------------------------------------------------------

export type NotificationsTabProps = CustomTabsProps & {
  statistic: INotificationStatisticEntity["count"];
  onTabChange?: (v: keyof INotificationStatisticEntity["count"]) => void;
};

export function NotificationTab({
  statistic,
  onTabChange,
  sx,
  ...other
}: NotificationsTabProps) {
  const [currentTab, setCurrentTab] =
    useState<keyof INotificationStatisticEntity["count"]>("all");

  // ----------------------------------------------------------------------

  const handleChangeTab = useCallback(
    (
      event: React.SyntheticEvent,
      newValue: keyof INotificationStatisticEntity["count"]
    ) => {
      setCurrentTab(newValue);
      onTabChange?.(newValue);
    },
    []
  );

  // ----------------------------------------------------------------------

  return (
    <CustomTabs
      variant="fullWidth"
      value={currentTab}
      onChange={handleChangeTab}
      {...other}
    >
      {TABS.map((tab) => (
        <Tab
          key={tab.value}
          iconPosition="end"
          value={tab.value}
          label={tab.label}
          icon={
            <Label
              variant={
                ((tab.value === "all" || tab.value === currentTab) &&
                  "filled") ||
                "soft"
              }
              color={
                (tab.value === "unread" && "success") ||
                (tab.value === "read" && "info") ||
                "default"
              }
            >
              {statistic[tab.value]}
            </Label>
          }
        />
      ))}
    </CustomTabs>
  );
}
