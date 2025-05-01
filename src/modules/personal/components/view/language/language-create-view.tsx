"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { LANGUAGE_CREATE_BREADCRUMB } from "../../../enums";
import { LanguageCreateForm } from "../../forms";

// ----------------------------------------------------------------------

export function LanguageCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new language"
        links={LANGUAGE_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <LanguageCreateForm />
    </DashboardContent>
  );
}
