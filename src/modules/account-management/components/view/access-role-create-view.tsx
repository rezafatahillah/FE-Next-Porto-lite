"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { ACCESS_ROLE_CREATE_BREADCRUMB } from "../../enums";
import { AccessRoleCreateEditForm } from "../forms";

// ----------------------------------------------------------------------

export function AccessRoleCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new role"
        links={ACCESS_ROLE_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <AccessRoleCreateEditForm />
    </DashboardContent>
  );
}
