"use client";

import { DashboardContent } from "@/templates-ui/layouts/dashboard";
import { Alert } from "@mui/material";
import { useAuthSendEmailVerification } from "../../hooks";
import LoadingButton from "@mui/lab/LoadingButton";

export function AlertEmailVerification({
  isEmailVerified,
}: {
  isEmailVerified: boolean;
}) {
  const { onSubmit, isLoading } = useAuthSendEmailVerification({});

  if (isEmailVerified) {
    return <></>;
  }

  return (
    <DashboardContent sx={{ flex: "none", paddingBottom: "32px" }}>
      <Alert
        severity="warning"
        action={
          <LoadingButton
            color="warning"
            size="small"
            variant="soft"
            sx={{ height: "auto" }}
            onClick={onSubmit}
            loading={isLoading}
          >
            Resend Verification
          </LoadingButton>
        }
      >
        We&apos;ve sent a verification link to your email address. Please check
        your inbox and click the link to complete your registration.
      </Alert>
    </DashboardContent>
  );
}
