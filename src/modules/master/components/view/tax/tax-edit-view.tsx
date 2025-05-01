"use client";

import { Tab, Tabs } from "@mui/material";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";
import { Iconify } from "@/templates-ui/components/iconify";
import { useTabs } from "@/templates-ui/hooks/use-tabs";

import { TAX_EDIT_BREADCRUMB } from "../../../enums";
import { TaxQuery } from "../../../hooks";
import { TaxEditGeneralForm } from "../../forms";
import { ITaxEntity } from "../../../entities";

// ----------------------------------------------------------------------

const TABS = [
  {
    value: "general",
    label: "General",
    icon: <Iconify icon="solar:user-id-bold" width={24} />,
  },
];

// ----------------------------------------------------------------------

interface Props {
  id: ITaxEntity["id"];
}

export function TaxEditView(props: Props) {
  const { id } = props;

  const tabs = useTabs("general");

  const { data, refetch } = TaxQuery.useGetDetails({
    props: {
      id,
    },
  });
  const current = data?.data;

  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Edit"
        links={TAX_EDIT_BREADCRUMB(id, current?.name)}
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

      {tabs.value === "general" ? (
        <TaxEditGeneralForm
          id={id}
          current={current}
          onSuccess={() => {
            refetch();
          }}
        />
      ) : null}
    </DashboardContent>
  );
}
