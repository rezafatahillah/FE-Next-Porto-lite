"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { DOCTYPE_CREATE_BREADCRUMB } from "../../../enums";
import { DoctypeEditGeneralForm } from "../../forms";

// ----------------------------------------------------------------------

export function DoctypeEditView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Ubah Data Keluarga"
        links={DOCTYPE_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <DoctypeEditGeneralForm />
    </DashboardContent>
  );
}
