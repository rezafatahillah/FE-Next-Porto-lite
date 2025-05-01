"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { FAMILY_CREATE_BREADCRUMB } from "../../../enums";
import { FamilyCreateForm } from "../../forms";

// ----------------------------------------------------------------------

export function FamilyCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new family"
        links={FAMILY_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <FamilyCreateForm />
    </DashboardContent>
  );
}
