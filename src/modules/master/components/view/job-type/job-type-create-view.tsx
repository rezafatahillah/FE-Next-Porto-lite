"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { JOBTYPE_CREATE_BREADCRUMB } from "../../../enums";
import { JobTypeCreateForm } from "../../forms";

// ----------------------------------------------------------------------

export function JobTypeCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new job type"
        links={JOBTYPE_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <JobTypeCreateForm />
    </DashboardContent>
  );
}
