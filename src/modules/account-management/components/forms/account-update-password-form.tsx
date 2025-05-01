"use client";

import { Card, IconButton, InputAdornment, Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { Field, Form } from "@/templates-ui/components/hook-form";
import { Iconify } from "@/templates-ui/components/iconify";
import { IFeedbackFormProps } from "@/utils/entities";

import { useAccountResetPassword, useAccountUpdatePassword } from "../../hooks";
import { IAccountEntity } from "../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  id: IAccountEntity["id"];
}

export function AccountUpdatePasswordForm(props: Props) {
  const { id, onSuccess } = props;

  const { methods, onSubmit, isLoading, passwordToggle } =
    useAccountUpdatePassword({
      id,
      onSuccess,
    });

  const { onSubmit: onSubmitReset, isLoading: isLoadingReset } =
    useAccountResetPassword({
      id,
      onSuccess,
    });

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Card sx={{ p: 3, gap: 3, display: "flex", flexDirection: "column" }}>
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

        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <LoadingButton
            type="button"
            variant="contained"
            color="success"
            loading={isLoading || isLoadingReset}
            onClick={onSubmitReset}
          >
            Reset
          </LoadingButton>

          <LoadingButton
            type="submit"
            variant="contained"
            loading={isLoading || isLoadingReset}
          >
            Save changes
          </LoadingButton>
        </Stack>
      </Card>
    </Form>
  );
}
