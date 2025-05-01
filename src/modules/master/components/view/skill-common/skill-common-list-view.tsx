"use client";

import { Button, Card } from "@mui/material";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";
import { Iconify } from "@/templates-ui/components/iconify";
import { RouterLink } from "@/templates-ui/routes/components";

import { paths } from "@/utils/routes";

import { SKILLCOMMON_BREADCRUMB } from "../../../enums";
import { SkillCommonTable } from "../../tables";

// ----------------------------------------------------------------------

interface Props {}

export function SkillCommonListView(props: Props) {
  const {} = props;

  return (
    <>
      <DashboardContent>
        <CustomBreadcrumbs
          heading="List"
          links={SKILLCOMMON_BREADCRUMB}
          action={
            <Button
              component={RouterLink}
              href={paths.backOffice.master.skillcommon.create}
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
          <SkillCommonTable />
        </Card>
      </DashboardContent>
    </>
  );
}
