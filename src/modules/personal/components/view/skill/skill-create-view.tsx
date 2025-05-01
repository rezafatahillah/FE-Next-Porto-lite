"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { SKILL_CREATE_BREADCRUMB } from "../../../enums";
import { SkillCreateForm } from "../../forms";

// ----------------------------------------------------------------------

export function SkillCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new skill"
        links={SKILL_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <SkillCreateForm />
    </DashboardContent>
  );
}
