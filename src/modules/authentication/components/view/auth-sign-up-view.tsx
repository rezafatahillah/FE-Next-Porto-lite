"use client";

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Link } from "@mui/material";

import { Form, Field } from "@/templates-ui/components/hook-form";
import { Iconify } from "@/templates-ui/components/iconify";

import { RouterLink } from "@/templates-ui/routes/components";
import { paths } from "@/utils/routes";
import { Box } from "@mui/material";
import { FormHead } from "../form";
import { useAuthSignUp } from "../../hooks";

// ----------------------------------------------------------------------

export function AuthSignUpView() {
  const { methods, passwordToggle, isLoading, onSubmit } = useAuthSignUp({});

  const renderLogo = (
    <FormHead
      title="Get started absolutely free"
      description={
        <>
          {`Already have an account? `}
          <Link
            component={RouterLink}
            href={paths.auth.jwt.signIn}
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
      <Box gap={3} display="flex" flexDirection="column">
        <Field.Text
          name="name"
          label="Name"
          InputLabelProps={{ shrink: true }}
        />

        <Field.Text
          name="email"
          label="Email address"
          InputLabelProps={{ shrink: true }}
        />

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

        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isLoading}
          loadingIndicator="Create account..."
        >
          Create account
        </LoadingButton>
      </Box>
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
