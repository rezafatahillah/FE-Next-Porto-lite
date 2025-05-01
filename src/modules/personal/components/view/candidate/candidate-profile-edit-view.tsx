"use client";

import { Tab, Tabs } from "@mui/material";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";
import { Iconify } from "@/templates-ui/components/iconify";
import { useTabs } from "@/templates-ui/hooks/use-tabs";

import { CANDIDATE_PROFILE_EDIT_BREADCRUMB } from "../../../enums";
import { CandidateQuery } from "../../../hooks";
import { CandidateEditProfileForm } from "../../forms";
import { ICandidateEntity } from "../../../entities";
import { useGetOwnSession } from "@/modules/authentication";


// ----------------------------------------------------------------------

const TABS = [
  {
    value: "general",
    label: "General",
    icon: <Iconify icon="solar:user-id-bold" width={24} />,
  },
];

// ----------------------------------------------------------------------

export function CandidateProfileEditView() {

  const tabs = useTabs("general");
  const { profile } = useGetOwnSession();
  const id: ICandidateEntity["id"] = profile?.id ?? ""; 

  const { data, refetch } = CandidateQuery.useGetDetails({
    props: {
      id,
    },
  });
  console.log(data)
  if (!profile) return;
  const current = data?.data;

  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Edit"
        links={CANDIDATE_PROFILE_EDIT_BREADCRUMB(id, current?.accountName)}
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
        <CandidateEditProfileForm
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
