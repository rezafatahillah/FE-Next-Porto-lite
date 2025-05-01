"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { JOBFIELD_CREATE_BREADCRUMB } from "../../../enums";
import { JobFieldCreateForm } from "../../forms";

// ----------------------------------------------------------------------

export function JobFieldCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new job field"
        links={JOBFIELD_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <JobFieldCreateForm />
    </DashboardContent>
  );
}
