"use client";

import {
  Card,
  Stack,
  CardHeader,
  Divider,
  Typography,
  FormHelperText,
  Box,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { Field, Form } from "@/templates-ui/components/hook-form";

import { AccessPermissionQuery, useAccessRoleCreateUpdate } from "../../hooks";
import { IAccessRoleEntity } from "../../entities";

// ----------------------------------------------------------------------

interface Props {
  current?: IAccessRoleEntity;
}

export function AccessRoleCreateEditForm(props: Props) {
  const { current } = props;

  const { methods, onSubmit, isUpdate, isLoading } = useAccessRoleCreateUpdate({
    current,
  });

  const {
    formState: { errors },
  } = methods;

  const { data } = AccessPermissionQuery.useGetAll({
    props: {},
    options: {
      staleTime: Infinity,
    },
  });
  const permissionsOptions = data?.data || [];

  const renderDetails = (
    <Card>
      <CardHeader title="Details" sx={{ mb: 3 }} />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Field.Text name="name" label="Name" required />

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
        {!isUpdate ? "Create" : "Save changes"}
      </LoadingButton>
    </Stack>
  );

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Stack
        spacing={{ xs: 3, md: 5 }}
        sx={{ mx: "auto", maxWidth: { xs: 720, xl: 880 } }}
      >
        {renderDetails}

        {renderActions}
      </Stack>
    </Form>
  );
}
