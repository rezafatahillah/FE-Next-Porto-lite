"use client";

import { useRouter } from "next/navigation";
import {
  Card,
  Stack,
  CardHeader,
  InputAdornment,
  IconButton,
  Button,
  Paper,
  Box,
  Typography,
  FormHelperText,
  Divider,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { Field, Form } from "@/templates-ui/components/hook-form";
import { Iconify } from "@/templates-ui/components/iconify";
import { useBoolean } from "@/templates-ui/hooks/use-boolean";
import { paths } from "@/utils/routes";

import { UserSelectDialog } from "@/modules/human-resource";

import { AccessPermissionQuery, useAccountCreate } from "../../hooks";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useState } from "react";

// ----------------------------------------------------------------------

interface Props {}

export function AccountCreateForm(props: Props) {
  const {} = props;

  const router = useRouter();

  const [role, setRole] = useState<number>(0);

  const {
    methods,
    values: { user },

    passwordToggle,
    setPermissions,
    handleSelectUser,

    isLoading,
    onSubmit,
  } = useAccountCreate({
    onSuccess: () => {
      router.push(paths.backOffice.accounts.root);
    },
  });

  const {
    formState: { errors },
  } = methods;

  const { data } = AccessPermissionQuery.useGetByRole({
    props: {
      id: role,
    },
    options: {
      staleTime: Infinity,
      enabled: !!role,
    },
  });
  const permissionsOptions = data?.data || [];

  useEffect(() => {
    if (data) {
      const permissions = permissionsOptions.flatMap((p) => p.permissions);
      setPermissions(permissions);
    }
  }, [data]);

  const userDialog = useBoolean();

  const renderDetails = (
    <Card>
      <CardHeader title="Details" sx={{ mb: 3 }} />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        {!!user ? (
          <Box>
            <Paper variant="outlined" sx={{ position: "relative", p: 3 }}>
              <IconButton
                sx={{ position: "absolute", top: 24, right: 16 }}
                onClick={userDialog.onTrue}
              >
                <Iconify icon="solar:pen-bold" />
              </IconButton>

              <Stack direction="row">
                <Stack
                  spacing={0.5}
                  alignItems="flex-start"
                  sx={{ typography: "body2" }}
                >
                  <Typography variant="subtitle2">{user.name}</Typography>

                  <Box sx={{ color: "text.secondary" }}>{user.email}</Box>
                </Stack>
              </Stack>
            </Paper>

            {!!errors.userId?.message ? (
              <FormHelperText error sx={{ mt: 1 }}>
                {errors.userId?.message}
              </FormHelperText>
            ) : null}
          </Box>
        ) : (
          <Button
            size="small"
            startIcon={<Iconify icon="solar:add-circle-bold" />}
            onClick={userDialog.onTrue}
            sx={{ width: "fit-content" }}
          >
            Select user
          </Button>
        )}

        <Field.Text
          name="password"
          label="Password"
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
          inputProps={{
            autoComplete: "off",
          }}
        />

        <Field.Text
          name="passwordConfirmation"
          type={passwordToggle.value ? "text" : "password"}
          label="Confirm password"
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
    </Card>
  );

  const renderAccess = (
    <Card>
      <CardHeader title="Access" sx={{ mb: 3 }} />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Field.AccessRoleSelect
          name="roleId"
          label="Role"
          onAccessRoleSelect={(value) => setRole(value?.id!)}
        />

        <Stack>
          <Stack spacing={3}>
            {permissionsOptions.map((item) => (
              <Stack key={item.module} spacing={1}>
                <Typography variant="body2">{item.module}</Typography>

                <Box sx={{ px: 0.5 }}>
                  <Field.MultiCheckbox
                    row
                    name="permissions"
                    options={item.permissions.map((permission) => ({
                      label: permission.action,
                      value: permission.id,
                    }))}
                    hideError
                  />
                </Box>
              </Stack>
            ))}
          </Stack>

          <FormHelperText error={!!errors.permissions?.message} sx={{ mx: 0 }}>
            {errors.permissions?.message}
          </FormHelperText>
        </Stack>
      </Stack>
    </Card>
  );

  const renderActions = (
    <Stack
      spacing={3}
      direction="row"
      alignItems="center"
      flexWrap="wrap"
      justifyContent="end"
    >
      <LoadingButton
        type="submit"
        variant="contained"
        size="large"
        loading={isLoading}
      >
        Create
      </LoadingButton>
    </Stack>
  );

  return (
    <>
      <Form methods={methods} onSubmit={onSubmit}>
        <Grid container spacing={3} sx={{ mb: { xs: 3, md: 5 } }}>
          <Grid xs={12} md={6}>
            {renderDetails}
          </Grid>

          <Grid xs={12} md={6}>
            {renderAccess}
          </Grid>

          <Grid xs={12}>{renderActions}</Grid>
        </Grid>
      </Form>

      <UserSelectDialog
        withAccount={false}
        open={userDialog.value}
        onClose={userDialog.onFalse}
        onSelect={(value) => {
          handleSelectUser(value);
          userDialog.onFalse();
        }}
      />
    </>
  );
}
