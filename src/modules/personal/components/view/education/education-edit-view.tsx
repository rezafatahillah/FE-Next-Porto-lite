"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { EDUCATION_CREATE_BREADCRUMB } from "../../../enums";
import { EducationEditGeneralForm } from "../../forms";

// ----------------------------------------------------------------------

export function EducationEditView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Ubah Data Pendidikan"
        links={EDUCATION_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <EducationEditGeneralForm />
    </DashboardContent>
  );
}
