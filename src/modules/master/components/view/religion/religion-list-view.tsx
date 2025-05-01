"use client";

import { Button, Card } from "@mui/material";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";
import { Iconify } from "@/templates-ui/components/iconify";
import { RouterLink } from "@/templates-ui/routes/components";

import { paths } from "@/utils/routes";

import { RELIGION_BREADCRUMB } from "../../../enums";
import { ReligionTable } from "../../tables";

// ----------------------------------------------------------------------

interface Props {}

export function ReligionListView(props: Props) {
  const {} = props;

  return (
    <>
      <DashboardContent>
        <CustomBreadcrumbs
          heading="List"
          links={RELIGION_BREADCRUMB}
          action={
            <Button
              component={RouterLink}
              href={paths.backOffice.master.religion.create}
              variant="contained"
              startIcon={<Iconify icon="solar:add-circle-bold" />}
            >
              New
            </Button>
          }
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />

        <Card>
          <ReligionTable />
        </Card>
      </DashboardContent>
    </>
  );
}
