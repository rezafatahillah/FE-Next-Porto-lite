"use client";

import { Button, Card } from "@mui/material";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { CustomBreadcrumbs } from "@/templates-ui/components/custom-breadcrumbs";
import { Iconify } from "@/templates-ui/components/iconify";
import { RouterLink } from "@/templates-ui/routes/components";

import { paths } from "@/utils/routes";

import { DOCTYPE_BREADCRUMB } from "../../../enums";
import { DoctypeTable } from "../../tables";

import { DoctypeQuery } from "@/modules/personal/hooks";

// ----------------------------------------------------------------------

interface Props {}

export function DoctypeListView(props: Props) {
  const {} = props;

  const { data: docData } = DoctypeQuery.useGetAll({
      props: {},
      options: {
        staleTime: Infinity,
      },
    });
  
    const listDoc = docData?.data || [];

    console.log(listDoc);

  return (
    <>
      <DashboardContent>
        <CustomBreadcrumbs
          heading="List"
          links={DOCTYPE_BREADCRUMB}
          action={
            <Button
              component={RouterLink}
              href={paths.backOffice.personal.doctype.create}
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
          <DoctypeTable />
        </Card>
      </DashboardContent>
    </>
  );
}
