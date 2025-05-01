"use client";

import { Card, IconButton, InputAdornment } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { Field, Form } from "@/templates-ui/components/hook-form";
import { Iconify } from "@/templates-ui/components/iconify";
import { IFeedbackFormProps } from "@/utils/entities";
import { useUpdateProfilePassword } from "../hooks";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export function UpdateProfilePasswordForm(props: Props) {
  const { onSuccess } = props;

  const { methods, onSubmit, isLoading, passwordToggle } =
    useUpdateProfilePassword({
      onSuccess,
    });

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Card sx={{ p: 3, gap: 3, display: "flex", flexDirection: "column" }}>
        <Field.Text
          name="currentPassword"
          type={passwordToggle.value ? "text" : "password"}
          label="Old password"
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
          name="password"
          label="New password"
          type={passwordToggle.value ? "text" : "password"}
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
          type={passwordToggle.value ? "text" : "password"}
          label="Confirm new password"
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
          type="submit"
          variant="contained"
          loading={isLoading}
          sx={{ ml: "auto" }}
        >
          Save changes
        </LoadingButton>
      </Card>
    </Form>
  );
}
