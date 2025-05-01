"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";

import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";

import { MEDICAL_EDIT_BREADCRUMB } from "../../../enums";
import { MedicalQuery } from "../../../hooks";
import { MedicalEditForm, MedicalCreateForm } from "../../forms";
import { useGetOwnSession } from "@/modules/authentication";

// ----------------------------------------------------------------------

export function MedicalEditAllView() {

  const { profile } = useGetOwnSession();


  const { data: medicalData } = MedicalQuery.useGetAll({
    props: {},
    options: {
      staleTime: Infinity,
    },
  });

  const medicalList = medicalData?.data || [];

  if (!profile) {
    return (
      <DashboardContent>
        <p>Loading profile...</p>
      </DashboardContent>
    );
  }

  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Account"
        links={MEDICAL_EDIT_BREADCRUMB}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      {medicalList.length > 0 ? <MedicalEditForm /> : <MedicalCreateForm />}
    </DashboardContent>
  );
}
