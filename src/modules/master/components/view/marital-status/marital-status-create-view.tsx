"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { MARITALSTATUS_CREATE_BREADCRUMB } from "../../../enums";
import { MaritalStatusCreateForm } from "../../forms";

// ----------------------------------------------------------------------

export function MaritalStatusCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new marital status"
        links={MARITALSTATUS_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <MaritalStatusCreateForm />
    </DashboardContent>
  );
}
