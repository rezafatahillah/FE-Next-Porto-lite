"use client";

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Link } from "@mui/material";

import { Form, Field } from "@/templates-ui/components/hook-form";
import { Iconify } from "@/templates-ui/components/iconify";

import { useAuthSignIn } from "../../hooks";
import { RouterLink } from "@/templates-ui/routes/components";
import { paths } from "@/utils/routes";
import { FormHead } from "../form";

// ----------------------------------------------------------------------

export function AuthSignInView() {
  const { methods, passwordToggle, isLoading, onSubmit } = useAuthSignIn({});

  const renderLogo = (
    <FormHead
      title="Sign in to your account"
      description={
        <>
          {`Don’t have an account? `}
          <Link
            component={RouterLink}
            href={paths.auth.jwt.signUp}
            variant="subtitle2"
          >
            Get started
          </Link>
        </>
      }
      sx={{ textAlign: { xs: "center", md: "left" } }}
    />
  );

  const renderForm = (
    <Stack spacing={3}>
      <Field.Text
        name="username"
        label="Username"
        InputLabelProps={{ shrink: true }}
      />

      <Stack spacing={1.5}>
        <Link
          component={RouterLink}
          href={paths.auth.jwt.requestResetPassword}
          variant="body2"
          color="inherit"
          sx={{ alignSelf: "flex-end" }}
        >
          Forgot password?
        </Link>

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
      </Stack>

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isLoading}
        loadingIndicator="Sign in..."
      >
        Sign in
      </LoadingButton>
    </Stack>
  );

  return (
    <>
      {renderLogo}

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </Form>
    </>
  );
}
