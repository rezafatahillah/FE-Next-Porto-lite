"use client";

import {
  Box,
  Card,
  Divider,
  FormHelperText,
  Stack,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { useState } from "react";
import { Field, Form } from "@/templates-ui/components/hook-form";
import { IFeedbackFormProps } from "@/utils/entities";

import { AccessPermissionQuery, useAccountUpdateAccess } from "../../hooks";
import { IAccountEntity } from "../../entities";
import { CardHeader } from "@mui/material";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  current: IAccountEntity;
}

export function AccountUpdatePermissionForm(props: Props) {
  const { current, onSuccess } = props;

  const [role, setRole] = useState<number>(current.role.id);

  const { methods, onSubmit, isLoading } = useAccountUpdateAccess({
    current,
    onSuccess,
  });

  const {
    formState: { errors },
  } = methods;

  const { data } = AccessPermissionQuery.useGetByRole({
    props: {
      id: role || 0,
    },
    options: {
      staleTime: Infinity,
    },
  });
  const permissionsOptions = data?.data || [];

  const renderDetails = (
    <Stack spacing={3} sx={{ px: 3 }}>
      <Field.AccessRoleSelect
        name="roleId"
        label="Role"
        required
        defaultInput={current.role}
        onAccessRoleSelect={(value) =>
          value?.id !== undefined ? setRole(value.id) : null
        }
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
  );

  const renderActions = (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        m: 3,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <LoadingButton type="submit" variant="contained" loading={isLoading}>
        Save changes
      </LoadingButton>
    </Stack>
  );

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Card sx={{ gap: 3, display: "flex", flexDirection: "column" }}>
        <CardHeader title="Permissions" />

        <Divider />

        {renderDetails}

        {renderActions}
      </Card>
    </Form>
  );
}
