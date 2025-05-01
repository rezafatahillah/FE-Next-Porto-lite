"use client";

import { Card, Stack, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import LoadingButton from "@mui/lab/LoadingButton";

import { Field, Form } from "@/templates-ui/components/hook-form";
import { BYTES_ON_MB } from "@/utils/constants";
import { FileCodeEnum } from "@/modules/core";

import { useDoctypeCreate } from "../../../hooks";

// ----------------------------------------------------------------------

interface Props {}

export function DoctypeCreateForm(props: Props) {
  const {} = props;

  const {
    methods,

    onSubmit,
    isLoading,
  } = useDoctypeCreate({});

  const file0 = (
    <Card sx={{ pt: 2, pb: 2, px: 3 }}>
      <Typography variant="h6" gutterBottom>
        Foto Terbaru <span style={{ color: "red" }}>*</span>
      </Typography>

      <Box sx={{ mb: 5 }}>
        <Field.Upload
          name="doctypes[0].fileId"
          maxSize={BYTES_ON_MB[1]}
          code={FileCodeEnum.FileCandidate}
          accept={{ "application/pdf": [] }}
        />
        <Field.Text
          name="doctypes[0].group"
          // defaultValue={"DOC001"}
          label="Status"
          required
          sx={{ flex: 1 }}
          style={{ display: "none" }}
        />
      </Box>
    </Card>
  );

  const file1 = (
    <Card sx={{ pt: 2, pb: 2, px: 3 }}>
      <Typography variant="h6" gutterBottom>
        Ijazah <span style={{ color: "red" }}>*</span>
      </Typography>
      <Box sx={{ mb: 5 }}>
        <Field.Upload
          name="doctypes[1].fileId"
          maxSize={BYTES_ON_MB[1]}
          code={FileCodeEnum.FileCandidate}
          accept={{ "application/pdf": [] }}
        />
        <Field.Text
          name="doctypes[1].group"
          // defaultValue={"DOC002"}
          label="Status"
          required
          sx={{ flex: 1 }}
          style={{ display: "none" }}
        />
      </Box>
    </Card>
  );

  const file2 = (
    <Card sx={{ pt: 2, pb: 2, px: 3 }}>
      <Typography variant="h6" gutterBottom>
        Paklaring
      </Typography>
      <Box sx={{ mb: 5 }}>
        <Field.Upload
          name="doctypes[2].fileId"
          maxSize={BYTES_ON_MB[1]}
          code={FileCodeEnum.FileCandidate}
          accept={{ "application/pdf": [] }}
        />
        <Field.Text
          name="doctypes[2].group"
          // defaultValue={"DOC003"}
          label="Status"
          required
          sx={{ flex: 1 }}
          style={{ display: "none" }}
        />
      </Box>
    </Card>
  );

  const file3 = (
    <Card sx={{ pt: 2, pb: 2, px: 3 }}>
      <Typography variant="h6" gutterBottom>
        Sertifikat
      </Typography>
      <Box sx={{ mb: 5 }}>
        <Field.Upload
          name="doctypes[3].fileId"
          maxSize={BYTES_ON_MB[1]}
          code={FileCodeEnum.FileCandidate}
          accept={{ "application/pdf": [] }}
        />
        <Field.Text
          name="doctypes[3].group"
          // defaultValue={"DOC004"}
          label="Status"
          required
          sx={{ flex: 1 }}
          style={{ display: "none" }}
        />
      </Box>
    </Card>
  );

  const file4 = (
    <Card sx={{ pt: 2, pb: 2, px: 3 }}>
      <Typography variant="h6" gutterBottom>
        Curiculum Vitae <span style={{ color: "red" }}>*</span>
      </Typography>
      <Box sx={{ mb: 5 }}>
        <Field.Upload
          name="doctypes[4].fileId"
          maxSize={BYTES_ON_MB[1]}
          code={FileCodeEnum.FileCandidate}
          accept={{ "application/pdf": [] }}
        />
        <Field.Text
          name="doctypes[4].group"
          // defaultValue={"DOC005"}
          label="Status"
          required
          sx={{ flex: 1 }}
          style={{ display: "none" }}
        />
      </Box>
    </Card>
  );

  const file5 = (
    <Card sx={{ pt: 2, pb: 2, px: 3 }}>
      <Typography variant="h6" gutterBottom>
        Slip Gaji
      </Typography>
      <Box sx={{ mb: 5 }}>
        <Field.Upload
          name="doctypes[5].fileId"
          maxSize={BYTES_ON_MB[1]}
          code={FileCodeEnum.FileCandidate}
          accept={{ "application/pdf": [] }}
        />
        <Field.Text
          name="doctypes[5].group"
          // defaultValue={"DOC006"}
          label="Status"
          required
          sx={{ flex: 1 }}
          style={{ display: "none" }}
        />
      </Box>
    </Card>
  );

  const file6 = (
    <Card sx={{ pt: 2, pb: 2, px: 3 }}>
      <Typography variant="h6" gutterBottom>
        KTP <span style={{ color: "red" }}>*</span>
      </Typography>
      <Box sx={{ mb: 5 }}>
        <Field.Upload
          name="doctypes[6].fileId"
          maxSize={BYTES_ON_MB[1]}
          code={FileCodeEnum.FileCandidate}
          accept={{ "application/pdf": [] }}
        />
        <Field.Text
          name="doctypes[6].group"
          // defaultValue={"DOC007"}
          label="Status"
          required
          sx={{ flex: 1 }}
          style={{ display: "none" }}
        />
      </Box>
    </Card>
  );

  const file7 = (
    <Card sx={{ pt: 2, pb: 2, px: 3 }}>
      <Typography variant="h6" gutterBottom>
        Kartu Keluarga <span style={{ color: "red" }}>*</span>
      </Typography>
      <Box sx={{ mb: 5 }}>
        <Field.Upload
          name="doctypes[7].fileId"
          maxSize={BYTES_ON_MB[1]}
          code={FileCodeEnum.FileCandidate}
          accept={{ "application/pdf": [] }}
        />
        <Field.Text
          name="doctypes[7].group"
          // defaultValue={"DOC008"}
          label="Status"
          required
          sx={{ flex: 1 }}
          style={{ display: "none" }}
        />
      </Box>
    </Card>
  );

  const file8 = (
    <Card sx={{ pt: 2, pb: 2, px: 3 }}>
      <Typography variant="h6" gutterBottom>
        NPWP
      </Typography>
      <Box sx={{ mb: 5 }}>
        <Field.Upload
          name="doctypes[8].fileId"
          maxSize={BYTES_ON_MB[1]}
          code={FileCodeEnum.FileCandidate}
          accept={{ "application/pdf": [] }}
        />
        <Field.Text
          name="doctypes[8].group"
          // defaultValue={"DOC009"}
          label="Status"
          required
          sx={{ flex: 1 }}
          style={{ display: "none" }}
        />
      </Box>
    </Card>
  );

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Stack spacing={3}>{file0}</Stack>
        </Grid>
        <Grid xs={12} md={4}>
          <Stack spacing={3}>{file1}</Stack>
        </Grid>
        <Grid xs={12} md={4}>
          <Stack spacing={3}>{file2}</Stack>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Stack spacing={3}>{file3}</Stack>
        </Grid>
        <Grid xs={12} md={4}>
          <Stack spacing={3}>{file4}</Stack>
        </Grid>
        <Grid xs={12} md={4}>
          <Stack spacing={3}>{file5}</Stack>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Stack spacing={3}>{file6}</Stack>
        </Grid>
        <Grid xs={12} md={4}>
          <Stack spacing={3}>{file7}</Stack>
        </Grid>
        <Grid xs={12} md={4}>
          <Stack spacing={3}>{file8}</Stack>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid component="div" xs={12}>
          <LoadingButton
            type="submit"
            variant="contained"
            loading={isLoading}
            fullWidth
          >
            Create
          </LoadingButton>
        </Grid>
      </Grid>
    </Form>
  );
}
