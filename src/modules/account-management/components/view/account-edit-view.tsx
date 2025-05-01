"use client";

import { Tab, Tabs } from "@mui/material";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";
import { LoadingScreen } from "@/templates-ui/components/loading-screen";
import { useTabs } from "@/templates-ui/hooks/use-tabs";
import { Iconify } from "@/templates-ui/components/iconify";

import { ACCOUNT_EDIT_BREADCRUMB } from "../../enums";
import { AccountQuery } from "../../hooks";
import {
  AccountUpdateProfileForm,
  AccountUpdatePasswordForm,
  AccountUpdatePermissionForm,
} from "../forms";
import { IAccountEntity } from "../../entities";

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
  {
    value: "permission",
    label: "Permission",
    icon: <Iconify icon="ic:round-security" width={24} />,
  },
];

// ----------------------------------------------------------------------

interface Props {
  id: IAccountEntity["id"];
}

export function AccountEditView(props: Props) {
  const { id } = props;

  const { data, isFetching, refetch } = AccountQuery.useGetDetails({
    props: {
      id,
    },
  });
  const current = data?.data;

  const tabs = useTabs("general");

  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading={current?.name}
        links={ACCOUNT_EDIT_BREADCRUMB(id, current?.name)}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
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

      {isFetching ? (
        <LoadingScreen />
      ) : current ? (
        tabs.value === "general" ? (
          <AccountUpdateProfileForm
            current={current}
            onSuccess={() => {
              refetch();
            }}
          />
        ) : tabs.value === "permission" ? (
          <AccountUpdatePermissionForm
            current={current}
            onSuccess={() => {
              refetch();
            }}
          />
        ) : null
      ) : null}

      {tabs.value === "security" ? <AccountUpdatePasswordForm id={id} /> : null}
    </DashboardContent>
  );
}
