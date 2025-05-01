"use client";

import { Button, Card } from "@mui/material";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";
import { Iconify } from "@/templates-ui/components/iconify";
import { RouterLink } from "@/templates-ui/routes/components";

import { paths } from "@/utils/routes";

import { FAMILY_BREADCRUMB } from "../../../enums";
import { FamilyTable } from "../../tables";
import { FamilyQuery } from "@/modules/personal/hooks";

// ----------------------------------------------------------------------

interface Props {}

export function FamilyListView(props: Props) {
  const {} = props;

  const { data: familyData } = FamilyQuery.useGetAll({
    props: {},
    options: {
      staleTime: Infinity,
    },
  });

  const listFamily = familyData?.data || [];

  return (
    <>
      <DashboardContent>
        <CustomBreadcrumbs
          heading="List"
          links={FAMILY_BREADCRUMB}
          action={
            <Button
              component={RouterLink}
              href={
                listFamily.length > 0
                  ? paths.backOffice.personal.family.edit
                  : paths.backOffice.personal.family.create
              }
              variant="contained"
              startIcon={<Iconify icon="solar:add-circle-bold" />}
            >
              {listFamily.length > 0 ? "Edit" : "New"}
            </Button>
          }
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />

        <Card>
          <FamilyTable />
        </Card>
      </DashboardContent>
    </>
  );
}
