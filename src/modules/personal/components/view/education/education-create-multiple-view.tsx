"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { EDUCATION_CREATE_BREADCRUMB } from "../../../enums";
import { EducationCreateMultipleForm } from "../../forms";

// ----------------------------------------------------------------------

export function EducationCreateMultipleView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new education"
        links={EDUCATION_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <EducationCreateMultipleForm />
    </DashboardContent>
  );
}
