"use client";

import { Tab, Tabs } from "@mui/material";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";
import { Iconify } from "@/templates-ui/components/iconify";
import { useTabs } from "@/templates-ui/hooks/use-tabs";

import { DEGREE_EDIT_BREADCRUMB } from "../../../enums";
import { DegreeQuery } from "../../../hooks";
import { DegreeEditGeneralForm } from "../../forms";
import { IDegreeEntity } from "../../../entities";

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
  id: IDegreeEntity["id"];
}

export function DegreeEditView(props: Props) {
  const { id } = props;

  const tabs = useTabs("general");

  const { data, refetch } = DegreeQuery.useGetDetails({
    props: {
      id,
    },
  });
  const current = data?.data;

  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Edit"
        links={DEGREE_EDIT_BREADCRUMB(id, current?.name)}
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
        <DegreeEditGeneralForm
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
