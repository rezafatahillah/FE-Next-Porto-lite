"use client";

import {
  Card,
  Stack,
  Box,
  Divider,
  Typography,
  CardHeader,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import LoadingButton from "@mui/lab/LoadingButton";

import { Field, Form } from "@/templates-ui/components/hook-form";
import { fData } from "@/templates-ui/utils/format-number";
import { BYTES_ON_MB } from "@/utils/constants";
import { IFeedbackFormProps } from "@/utils/entities";

import { FileCodeEnum } from "@/modules/core";

import { useMedicalQuestionUpdate } from "../../../hooks";
import { IMedicalQuestionEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  id: IMedicalQuestionEntity["id"];
  current?: IMedicalQuestionEntity;
}

export function MedicalQuestionEditGeneralForm(props: Props) {
  const { id, current, onSuccess } = props;

  const { activeFile, onUploading, methods, onSubmit, isLoading } = useMedicalQuestionUpdate({
    id,
    current,
    onSuccess,
  });

  const renderPhotoProfile = (
    <Card sx={{ pt: 10, pb: 5, px: 3 }}>
      <Box sx={{ mb: 5 }}>
        <Field.UploadAvatar
          name="pictureId"
          maxSize={BYTES_ON_MB[2]}
          code={FileCodeEnum.ProfilePicture}
          defaultFile={current?.picture?.url}
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
              <br /> max size of {fData(BYTES_ON_MB[1])}
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
          <Field.Text name="name" label="Name" required />
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack alignItems="flex-end">
          <LoadingButton type="submit" variant="contained" loading={isLoading}>
            Save Changes
          </LoadingButton>
        </Stack>
      </Stack>
    </Card>
  );

  return (
    <Stack spacing={3}>
      <Form methods={methods} onSubmit={onSubmit}>
        <Grid container spacing={3}>

          <Grid xs={12} md={8}>
            <Stack spacing={3}>{renderDetails}</Stack>
          </Grid>
        </Grid>
      </Form>
    </Stack>
  );
}
