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
import { IFeedbackFormProps } from "@/utils/entities";

import { useCandidateIdentityUpdate } from "../../../hooks";
import { ICandidateEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  id: ICandidateEntity["id"];
  current?: ICandidateEntity;
}

export function CandidateEditIdentityForm(props: Props) {
  const { id, current, onSuccess } = props;

  const { methods, onSubmit, isLoading } = useCandidateIdentityUpdate({
    id,
    current,
    onSuccess,
  });

  const renderDetails = (
    <Card>
      <CardHeader title="Details" sx={{ mb: 3 }} />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Identitas Kependudukan
        </Typography>
        <Box
          rowGap={3}
          columnGap={2}
          display="grid"
          gridTemplateColumns={{ xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
        >
          <Field.Text
            name="ktp"
            label="KTP"
            placeholder="0"
            type="number"
            InputLabelProps={{ shrink: true }}
          />
          <Field.Text
            name="kk"
            label="KK"
            placeholder="0"
            type="number"
            InputLabelProps={{ shrink: true }}
          />
          <Field.Text
            name="paspor"
            label="Passport"
            placeholder="0"
            type="number"
            InputLabelProps={{ shrink: true }}
          />
        </Box>
      </Stack>

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Identitas Perpajakan
        </Typography>
        <Box
          rowGap={3}
          columnGap={2}
          display="grid"
          gridTemplateColumns={{ xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
        >
          <Field.Text
            name="npwp"
            label="NPWP"
            placeholder="0"
            type="number"
            InputLabelProps={{ shrink: true }}
          />

          <Field.Text
            name="statusPtkp"
            label="Status PTKP"
            placeholder="0"
            type="number"
            InputLabelProps={{ shrink: true }}
          />
        </Box>
      </Stack>

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Identitas Mengemudi
        </Typography>
        <Box
          rowGap={3}
          columnGap={2}
          display="grid"
          gridTemplateColumns={{ xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
        >
          <Field.Text
            name="simA"
            label="SIM A"
            placeholder="0"
            type="number"
            InputLabelProps={{ shrink: true }}
          />
          <Field.Text
            name="simB"
            label="SIM B"
            placeholder="0"
            type="number"
            InputLabelProps={{ shrink: true }}
          />
          <Field.Text
            name="simC"
            label="SIM C"
            placeholder="0"
            type="number"
            InputLabelProps={{ shrink: true }}
          />
        </Box>
      </Stack>

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Identitas BPJS
        </Typography>
        <Box
          rowGap={3}
          columnGap={2}
          display="grid"
          gridTemplateColumns={{ xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
        >
          <Field.Text
            name="bpjsKesehatan"
            label="BPJS Kesehatan"
            placeholder="0"
            type="number"
            InputLabelProps={{ shrink: true }}
          />
          <Field.Text
            name="bpjsKetenagakerjaan"
            label="BPJS Ketenagakerjaan"
            placeholder="0"
            type="number"
            InputLabelProps={{ shrink: true }}
          />
        </Box>
      </Stack>

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Identitas Perbankan
        </Typography>
        <Box
          rowGap={3}
          columnGap={2}
          display="grid"
          gridTemplateColumns={{ xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
        >
          <Field.Text
            name="bankName"
            label="Nama Bank"
            placeholder="Nama Bank"
            InputLabelProps={{ shrink: true }}
          />
          <Field.Text
            name="accountNo"
            label="Nomor Rekening"
            placeholder="Nomor Rekening"
            type="number"
            InputLabelProps={{ shrink: true }}
          />
          <Field.Text
            name="accountName"
            label="Nama Pemilik Rekening"
            placeholder="Nama Pemilik Rekening"
            InputLabelProps={{ shrink: true }}
          />
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
          {/* <Grid xs={12} md={4}>
            <Stack spacing={3}>{renderPhotoProfile}</Stack>
          </Grid> */}

          <Grid xs={12} md={12}>
            <Stack spacing={3}>{renderDetails}</Stack>
          </Grid>
        </Grid>
      </Form>
    </Stack>
  );
}
