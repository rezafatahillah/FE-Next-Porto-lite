"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { FAMILY_CREATE_BREADCRUMB } from "../../../enums";
import { FamilyEditGeneralForm } from "../../forms";

// ----------------------------------------------------------------------

export function FamilyEditView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Ubah Data Keluarga"
        links={FAMILY_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <FamilyEditGeneralForm />
    </DashboardContent>
  );
}
