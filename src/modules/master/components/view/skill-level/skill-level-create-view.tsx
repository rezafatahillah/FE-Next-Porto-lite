"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { SKILLLEVEL_CREATE_BREADCRUMB } from "../../../enums";
import { SkillLevelCreateForm } from "../../forms";

// ----------------------------------------------------------------------

export function SkillLevelCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new skill level"
        links={SKILLLEVEL_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <SkillLevelCreateForm />
    </DashboardContent>
  );
}
