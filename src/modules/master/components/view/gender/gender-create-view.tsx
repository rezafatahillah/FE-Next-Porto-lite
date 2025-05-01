"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { GENDER_CREATE_BREADCRUMB } from "../../../enums";
import { GenderCreateForm } from "../../forms";

// ----------------------------------------------------------------------

export function GenderCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new gender"
        links={GENDER_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <GenderCreateForm />
    </DashboardContent>
  );
}
