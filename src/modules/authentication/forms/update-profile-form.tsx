"use client";

import { useEffect } from "react";
import {
  Card,
  Stack,
  Box,
  Divider,
  CardHeader,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import LoadingButton from "@mui/lab/LoadingButton";

import { Field, Form } from "@/templates-ui/components/hook-form";
import { Iconify } from "@/templates-ui/components/iconify";
import { fData } from "@/templates-ui/utils/format-number";
import { IFeedbackFormProps } from "@/utils/entities";
import { BYTES_ON_MB } from "@/utils/constants";
import { useBoolean } from "@/templates-ui/hooks/use-boolean";

import { AccountStatusCodeEnum, FileCodeEnum } from "@/modules/core";

import { IProfileEntity } from "../entities";
import { useUpdateProfile, useUpdateProfilePicture } from "../hooks";
import { AccountUpdateUsernameDialog } from "@/modules/account-management";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  current: IProfileEntity;
}

export function UpdateProfileForm(props: Props) {
  const { current, onSuccess } = props;

  const { methods, isLoading, onSubmit, onInit } = useUpdateProfile({
    current,
    onSuccess,
  });

  const { activeFile, onUploading } = useUpdateProfilePicture({
    onSuccess,
  });

  useEffect(() => {
    onInit();
  }, [current]);

  const changeUsernameDialog = useBoolean();

  const renderPhotoProfile = (
    <Card sx={{ pt: 10, px: 3, textAlign: "center" }}>
      <Box sx={{ mb: 5 }}>
        <Field.UploadAvatar
          name="pictureId"
          maxSize={BYTES_ON_MB[2]}
          code={FileCodeEnum.ProfilePicture}
          defaultFile={activeFile}
          onUpload={onUploading}
          helperText={
            <Typography
              variant="caption"
              sx={{
                mt: 3,
                mx: "auto",
                display: "block",
                textAlign: "center",
                color: "text.disabled",
              }}
            >
              Allowed *.jpeg, *.jpg, *.png, *.gif
              <br /> max size of {fData(BYTES_ON_MB[2])}
            </Typography>
          }
        />
      </Box>
    </Card>
  );

  const renderDetails = (
    <Card>
      <CardHeader title="Details" sx={{ mb: 3 }} />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Box
          rowGap={3}
          columnGap={2}
          display="grid"
          gridTemplateColumns={{ xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
        >
          <Field.Text name="name" label="Full name" required />

          <TextField
            label="Email"
            value={current.email}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={changeUsernameDialog.onTrue}>
                    <Iconify icon="solar:pen-bold" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Stack alignItems="flex-end">
          <LoadingButton type="submit" variant="contained" loading={isLoading}>
            Save Changes
          </LoadingButton>
        </Stack>
      </Stack>
    </Card>
  );

  return (
    <>
      <Form methods={methods} onSubmit={onSubmit}>
        <Grid container spacing={3}>
          <Grid xs={12} md={4}>
            <Stack spacing={3}>{renderPhotoProfile}</Stack>
          </Grid>

          <Grid xs={12} md={8}>
            <Stack spacing={3}>{renderDetails}</Stack>
          </Grid>
        </Grid>
      </Form>

      <AccountUpdateUsernameDialog
        current={{
          ...current,
          status: AccountStatusCodeEnum.Enable,
          username: current.email,
        }}
        open={changeUsernameDialog.value}
        onClose={changeUsernameDialog.onFalse}
        onSuccess={onSuccess}
      />
    </>
  );
}
