"use client";

import { Tab, Tabs } from "@mui/material";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";
import { Iconify } from "@/templates-ui/components/iconify";
import { useTabs } from "@/templates-ui/hooks/use-tabs";

import { SKILLLEVEL_EDIT_BREADCRUMB } from "../../../enums";
import { SkillLevelQuery } from "../../../hooks";
import { SkillLevelEditGeneralForm } from "../../forms";
import { ISkillLevelEntity } from "../../../entities";

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
  id: ISkillLevelEntity["id"];
}

export function SkillLevelEditView(props: Props) {
  const { id } = props;

  const tabs = useTabs("general");

  const { data, refetch } = SkillLevelQuery.useGetDetails({
    props: {
      id,
    },
  });
  const current = data?.data;

  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Edit"
        links={SKILLLEVEL_EDIT_BREADCRUMB(id, current?.name)}
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
        <SkillLevelEditGeneralForm
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
