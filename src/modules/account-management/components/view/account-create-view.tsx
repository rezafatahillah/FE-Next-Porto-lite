"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { ACCOUNT_CREATE_BREADCRUMB } from "../../enums";
import { AccountCreateForm } from "../forms";

// ----------------------------------------------------------------------

export function AccountCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Create a new account"
        links={ACCOUNT_CREATE_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <AccountCreateForm />
    </DashboardContent>
  );
}
