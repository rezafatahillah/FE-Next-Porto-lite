"use client";

import {
  Box,
  Stack,
  Button,
  Divider,
  MenuItem,
  Typography,
  InputAdornment,
  inputBaseClasses,
  Card,
  CardHeader,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import LoadingButton from "@mui/lab/LoadingButton";

import { Field, Form } from "@/templates-ui/components/hook-form";
import { fData } from "@/templates-ui/utils/format-number";
import { BYTES_ON_MB } from "@/utils/constants";
import { IFeedbackFormProps } from "@/utils/entities";

import { FileCodeEnum } from "@/modules/core";

import { useReferenceUpdate } from "../../../hooks";
import { IReferenceEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  id: IReferenceEntity["id"];
  current?: IReferenceEntity;
}

export function ReferenceEditGeneralForm(props: Props) {
  const { id, current, onSuccess } = props;

  const { activeFile, onUploading, methods, onSubmit, isLoading } = useReferenceUpdate({
    id,
    current,
    onSuccess,
  });

  const renderDetails = (
    <Card>
      <CardHeader title="Details" sx={{ mb: 3 }} />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
      <Box
        display="grid"
        columnGap={2}
        rowGap={3}
        gridTemplateColumns="repeat(5, 1fr)" 
      >
        <Field.Text name="name" label="Name" required />
        <Field.Text name="address" label="Address" required />
        <Field.Text name="phone" label="Phone" required />
        <Field.Text name="position" label="Position" required />
        <Field.Text name="relation" label="Relation" required />
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

          <Grid xs={12} md={12}>
            <Stack spacing={3}>{renderDetails}</Stack>
          </Grid>
        </Grid>
      </Form>
    </Stack>
  );
}
