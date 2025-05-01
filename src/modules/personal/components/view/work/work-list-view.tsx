"use client";

import { Button, Card } from "@mui/material";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";
import { Iconify } from "@/templates-ui/components/iconify";
import { RouterLink } from "@/templates-ui/routes/components";

import { paths } from "@/utils/routes";

import { WORK_BREADCRUMB } from "../../../enums";
import { WorkTable } from "../../tables";

// ----------------------------------------------------------------------

interface Props {}

export function WorkListView(props: Props) {
  const {} = props;

  return (
    <>
      <DashboardContent>
        <CustomBreadcrumbs
          heading="List"
          links={WORK_BREADCRUMB}
          action={
            <Button
              component={RouterLink}
              href={paths.backOffice.personal.work.create}
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
          <WorkTable />
        </Card>
      </DashboardContent>
    </>
  );
}
