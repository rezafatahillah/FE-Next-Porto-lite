"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { TAX_CREATE_BREADCRUMB } from "../../../enums";
import { TaxCreateForm } from "../../forms";

// ----------------------------------------------------------------------

export function TaxCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new tax"
        links={TAX_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <TaxCreateForm />
    </DashboardContent>
  );
}
