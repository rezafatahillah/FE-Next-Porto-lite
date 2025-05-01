"use client";

import LoadingButton from "@mui/lab/LoadingButton";
import { Box } from "@mui/material";
import { PasswordIcon } from "@/templates-ui/assets/icons";

import { Form, Field } from "@/templates-ui/components/hook-form";

import { useAuthRequestResetPassword } from "../../hooks";
import { FormHead, FormReturnLink } from "../form";
import { paths } from "@/utils/routes";

// ----------------------------------------------------------------------

export function AuthRequestResetPasswordView() {
  const { methods, isLoading, onSubmit } = useAuthRequestResetPassword({});

  const renderLogo = (
    <FormHead
      icon={<PasswordIcon />}
      title="Forgot your password?"
      description={`Please enter the email address associated with your account and we'll email you a link to reset your password.`}
    />
  );

  const renderForm = (
    <Box gap={3} display="flex" flexDirection="column">
      <Field.Text
        autoFocus
        name="email"
        label="Email address"
        placeholder="example@gmail.com"
        InputLabelProps={{ shrink: true }}
      />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isLoading}
        loadingIndicator="Send request..."
      >
        Send request
      </LoadingButton>
    </Box>
  );

  return (
    <>
      {renderLogo}

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </Form>

      <FormReturnLink href={paths.auth.jwt.signIn} />
    </>
  );
}
