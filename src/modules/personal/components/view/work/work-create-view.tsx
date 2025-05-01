"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { WORK_CREATE_BREADCRUMB } from "../../../enums";
import { WorkCreateForm } from "../../forms";

// ----------------------------------------------------------------------

export function WorkCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new work"
        links={WORK_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <WorkCreateForm />
    </DashboardContent>
  );
}
