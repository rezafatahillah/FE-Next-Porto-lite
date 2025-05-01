"use client";

import { Box } from "@mui/material";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";

import { useGetOwnSession } from "@/modules/authentication";

// ----------------------------------------------------------------------

export function OverviewAppView() {
  const { accessToken } = useGetOwnSession();

  return (
    <DashboardContent>
      {/* <Box sx={{ wordBreak: 'break-all' }}>{accessToken}</Box> */}
    </DashboardContent>
  );
}
