"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { MEDICALQUESTION_CREATE_BREADCRUMB } from "../../../enums";
import { MedicalQuestionCreateForm } from "../../forms";

// ----------------------------------------------------------------------

export function MedicalQuestionCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new medical question"
        links={MEDICALQUESTION_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <MedicalQuestionCreateForm />
    </DashboardContent>
  );
}
