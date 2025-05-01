"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { DISEASE_CREATE_BREADCRUMB } from "../../../enums";
import { DiseaseCreateForm } from "../../forms";

// ----------------------------------------------------------------------

export function DiseaseCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new disease"
        links={DISEASE_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <DiseaseCreateForm />
    </DashboardContent>
  );
}
