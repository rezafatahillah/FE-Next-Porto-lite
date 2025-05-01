"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { DOCTYPE_CREATE_BREADCRUMB } from "../../../enums";
import { DoctypeCreateForm } from "../../forms";

// ----------------------------------------------------------------------

export function DoctypeCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new doctype"
        links={DOCTYPE_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <DoctypeCreateForm />
    </DashboardContent>
  );
}
