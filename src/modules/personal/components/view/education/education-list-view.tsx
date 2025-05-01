"use client";

import { Button, Card } from "@mui/material";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";
import { Iconify } from "@/templates-ui/components/iconify";
import { RouterLink } from "@/templates-ui/routes/components";

import { paths } from "@/utils/routes";

import { EDUCATION_BREADCRUMB } from "../../../enums";
import { EducationTable } from "../../tables";
import { EducationQuery } from "@/modules/personal/hooks";

// ----------------------------------------------------------------------

interface Props {}

export function EducationListView(props: Props) {
  const {} = props;

  const { data: educationData } = EducationQuery.useGetAll({
    props: {},
    options: {
      staleTime: Infinity,
    },
  });

  const listEducation = educationData?.data || [];

  return (
    <>
      <DashboardContent>
        <CustomBreadcrumbs
          heading="List"
          links={EDUCATION_BREADCRUMB}
          action={
            <Button
              component={RouterLink}
              href={
                listEducation.length > 0
                  ? paths.backOffice.personal.education.edit
                  : paths.backOffice.personal.education.create
              }
              variant="contained"
              startIcon={<Iconify icon="solar:add-circle-bold" />}
            >
              {listEducation.length > 0 ? "Edit" : "New"}
            </Button>
          }
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />

        <Card>
          <EducationTable />
        </Card>
      </DashboardContent>
    </>
  );
}
