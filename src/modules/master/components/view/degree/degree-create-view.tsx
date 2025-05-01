"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { DEGREE_CREATE_BREADCRUMB } from "../../../enums";
import { DegreeCreateForm } from "../../forms";

// ----------------------------------------------------------------------

export function DegreeCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new degree"
        links={DEGREE_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <DegreeCreateForm />
    </DashboardContent>
  );
}
