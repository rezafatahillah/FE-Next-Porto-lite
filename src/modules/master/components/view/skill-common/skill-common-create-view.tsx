"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { SKILLCOMMON_CREATE_BREADCRUMB } from "../../../enums";
import { SkillCommonCreateForm } from "../../forms";

// ----------------------------------------------------------------------

export function SkillCommonCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new skill common"
        links={SKILLCOMMON_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <SkillCommonCreateForm />
    </DashboardContent>
  );
}
