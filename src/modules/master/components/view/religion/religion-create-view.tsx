"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { RELIGION_CREATE_BREADCRUMB } from "../../../enums";
import { ReligionCreateForm } from "../../forms";

// ----------------------------------------------------------------------

export function ReligionCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new religion"
        links={RELIGION_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <ReligionCreateForm />
    </DashboardContent>
  );
}
