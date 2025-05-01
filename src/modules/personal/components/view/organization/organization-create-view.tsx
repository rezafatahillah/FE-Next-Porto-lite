"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { ORGANIZATION_CREATE_BREADCRUMB } from "../../../enums";
import { OrganizationCreateForm } from "../../forms";

// ----------------------------------------------------------------------

export function OrganizationCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new organization"
        links={ORGANIZATION_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <OrganizationCreateForm />
    </DashboardContent>
  );
}
