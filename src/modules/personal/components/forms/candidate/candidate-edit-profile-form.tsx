"use client";

import {
  Card,
  Stack,
  Box,
  Divider,
  Typography,
  CardHeader,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import LoadingButton from "@mui/lab/LoadingButton";

import { Field, Form } from "@/templates-ui/components/hook-form";
import { fData } from "@/templates-ui/utils/format-number";
import { BYTES_ON_MB } from "@/utils/constants";
import { IFeedbackFormProps } from "@/utils/entities";

import { FileCodeEnum } from "@/modules/core";

import { useCandidateProfileUpdate } from "../../../hooks";
import { ICandidateEntity } from "../../../entities";
import { CodeQuery } from "../../../hooks";
import dayjs from "dayjs";

// const { data: maritalData } = CodeQuery.useGetMaritalType({
//   props: {},
//   options: {
//     staleTime: Infinity,
//   },
// });

// const { data: genderData } = CodeQuery.useGetGenderType({
//   props: {},
//   options: {
//     staleTime: Infinity,
//   },
// });

// const { data: religionData } = CodeQuery.useGetReligionType({
//   props: {},
//   options: {
//     staleTime: Infinity,
//   },
// });

// const listMarital = maritalData?.data || [];
// const listGender = genderData?.data || [];
// const listReligion = religionData?.data || [];

// ----------------------------------------------------------------------
export const GENDER = [
  { label: "Laki-Laki", value: "GDR001" },
  { label: "Perempuan", value: "GDR002" },
];

export const RELIGION = [
  { label: "Islam", value: "RLG001" },
  { label: "Protestan", value: "RLG002" },
  { label: "Katolik", value: "RLG003" },
  { label: "Hindu", value: "RLG004" },
  { label: "Buddha", value: "RLG005" },
  { label: "Konghucu", value: "RLG006" },
];

export const MARITAL = [
  { label: "Lajang", value: "MRT001" },
  { label: "menikah", value: "MRT002" },
  { label: "Bercerai", value: "MRT003" },
];

interface Props extends IFeedbackFormProps {
  id: ICandidateEntity["id"];
  current?: ICandidateEntity;
}

export function CandidateEditProfileForm(props: Props) {
  const { id, current, onSuccess } = props;

  const { activeFile, onUploading, methods, onSubmit, isLoading } =
    useCandidateProfileUpdate({
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
          rowGap={3}
          columnGap={2}
          display="grid"
          gridTemplateColumns={{ xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
        >
          <Field.Text
            name="summary"
            label="Profile Summary"
            multiline
            rows={4}
          />
        </Box>
      </Stack>

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Box
          rowGap={3}
          columnGap={2}
          display="grid"
          gridTemplateColumns={{ xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
        >
          <Field.Text name="name" label="Nama Lengkap" required />
          <Stack spacing={1}>
            <Typography variant="subtitle2">Jenis Kelamin</Typography>
            <Field.RadioGroup
              row
              name="gender"
              options={GENDER}
              sx={{ gap: 4 }}
            />
          </Stack>
          <Field.Text name="email" label="Alamat Email" required disabled/>
          <Field.Phone
            name="phone"
            label="Phone Number"
            required
            defaultValue="+62"
          />

          <Stack direction="row" spacing={2}>
            <Box sx={{ flex: 1 }}>
              <Field.Text name="birthPlace" label="Kota Lahir" />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Field.DatePicker
                name="birthDate"
                label="Tanggal Lahir"
                minDate={dayjs("1950-01-01")}
                maxDate={dayjs()}
              />
            </Box>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Box sx={{ flex: 1 }}>
              <Field.Select
                fullWidth
                name="religion"
                label="Agama"
                InputLabelProps={{ shrink: true }}
                sx={{ flex: 1 }}
                // defaultValue={current?.category.id}
                // defaultValue={0}
              >
                {RELIGION.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    sx={{ textTransform: "capitalize" }}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Field.Select>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Field.Text name="otherReligion" label="Agama Lain" />
            </Box>
          </Stack>

          <Field.Text name="hobby" label="Hobby" />
          <Stack spacing={1}>
            <Typography variant="subtitle2">Status Pernikahan</Typography>
            <Field.RadioGroup
              row
              name="marital"
              options={MARITAL}
              sx={{ gap: 4 }}
            />
          </Stack>
        </Box>
      </Stack>

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
          columnGap={3}
        >
          <Box display="grid" rowGap={3}>
            <Typography variant="h6" gutterBottom>
              Alamat Tinggal Saat Ini
            </Typography>
            <Field.Text
              name="addressDomicile"
              label="Alamat Tinggal (Domisili)"
              multiline
              rows={4}
            />
            <Field.Text name="cityDomicile" label="Kota (Domisili)" />
            <Field.Text name="postalDomicile" label="Kode Pos (Domisili)" />
          </Box>
          <Box display="grid" rowGap={3}>
            <Typography variant="h6" gutterBottom>
              Alamat Sesuai KTP
            </Typography>
            <Field.Text
              name="address"
              label="Alamat Tinggal (KTP)"
              multiline
              rows={4}
            />
            <Field.Text name="city" label="Kota (KTP)" />
            <Field.Text name="postal" label="Kode Pos (KTP)" />
          </Box>
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
