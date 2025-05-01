"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { EDUCATION_CREATE_BREADCRUMB } from "../../../enums";
import { EducationCreateForm } from "../../forms";

// ----------------------------------------------------------------------

export function EducationCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new education"
        links={EDUCATION_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <EducationCreateForm />
    </DashboardContent>
  );
}
