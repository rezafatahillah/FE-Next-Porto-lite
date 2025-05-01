"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { REFERENCE_CREATE_BREADCRUMB } from "../../../enums";
import { ReferenceCreateForm } from "../../forms";

// ----------------------------------------------------------------------

export function ReferenceCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new reference"
        links={REFERENCE_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <ReferenceCreateForm />
    </DashboardContent>
  );
}
