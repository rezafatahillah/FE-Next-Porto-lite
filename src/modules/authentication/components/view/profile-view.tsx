"use client";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import { useTabs } from "@/templates-ui/hooks/use-tabs";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";

import { Iconify } from "@/templates-ui/components/iconify";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { PROFILE_BREADCRUMB } from "../../enums";
import { useGetOwnSession } from "../../hooks";
import { UpdateProfileForm, UpdateProfilePasswordForm } from "../../forms";

// ----------------------------------------------------------------------

const TABS = [
  {
    value: "general",
    label: "General",
    icon: <Iconify icon="solar:user-id-bold" width={24} />,
  },
  {
    value: "security",
    label: "Security",
    icon: <Iconify icon="ic:round-vpn-key" width={24} />,
  },
];

// ----------------------------------------------------------------------

export function ProfileView() {
  const tabs = useTabs("general");

  const { profile } = useGetOwnSession();

  if (!profile) return;

  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Account"
        links={PROFILE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Tabs
        value={tabs.value}
        onChange={tabs.onChange}
        sx={{ mb: { xs: 3, md: 5 } }}
      >
        {TABS.map((tab) => (
          <Tab
            key={tab.value}
            label={tab.label}
            icon={tab.icon}
            value={tab.value}
          />
        ))}
      </Tabs>

      {tabs.value === "general" ? (
        <UpdateProfileForm current={profile} />
      ) : null}

      {tabs.value === "security" ? <UpdateProfilePasswordForm /> : null}
    </DashboardContent>
  );
}
