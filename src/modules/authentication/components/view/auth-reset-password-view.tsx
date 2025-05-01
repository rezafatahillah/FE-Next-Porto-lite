"use client";

import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Box } from "@mui/material";

import { Form, Field } from "@/templates-ui/components/hook-form";
import { Iconify } from "@/templates-ui/components/iconify";

import { useAuthResetPassword } from "../../hooks";
import { paths } from "@/utils/routes";
import { FormHead, FormReturnLink } from "../form";
import { SentIcon } from "@/templates-ui/assets/icons";

// ----------------------------------------------------------------------

export function AuthResetPasswordView() {
  const { methods, passwordToggle, isLoading, onSubmit } = useAuthResetPassword(
    {}
  );

  const renderLogo = (
    <FormHead
      icon={<SentIcon />}
      title="Request sent successfully!"
      description={`We've sent a 6-digit confirmation email to your email. \nPlease enter the code in below box to verify your email.`}
    />
  );

  const renderForm = (
    <Box gap={3} display="flex" flexDirection="column">
      <Field.Code name="code" />

      <Field.Text
        name="password"
        label="Password"
        placeholder="6+ characters"
        type={passwordToggle.value ? "text" : "password"}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={passwordToggle.onToggle} edge="end">
                <Iconify
                  icon={
                    passwordToggle.value
                      ? "solar:eye-bold"
                      : "solar:eye-closed-bold"
                  }
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Field.Text
        name="passwordConfirmation"
        label="Confirm new password"
        type={passwordToggle.value ? "text" : "password"}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={passwordToggle.onToggle} edge="end">
                <Iconify
                  icon={
                    passwordToggle.value
                      ? "solar:eye-bold"
                      : "solar:eye-closed-bold"
                  }
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isLoading}
        loadingIndicator="Update password..."
      >
        Update password
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
