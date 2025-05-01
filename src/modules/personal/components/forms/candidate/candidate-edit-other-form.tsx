"use client";

import {
  Card,
  Stack,
  Box,
  Divider,
  Typography,
  CardHeader,
  InputAdornment,
  Chip,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import LoadingButton from "@mui/lab/LoadingButton";

import { Field, Form } from "@/templates-ui/components/hook-form";
import { IFeedbackFormProps } from "@/utils/entities";

import { useCandidateOtherUpdate } from "../../../hooks";
import { ICandidateEntity } from "../../../entities";
import { card } from "@/templates-ui/theme/core/components/card";

// ----------------------------------------------------------------------

export const _tags = [
  { text: "Sales" },
  { text: "Public Relation" },
  { text: "Technical" },
  { text: "Call Center" },
  { text: "Quality Assurance" },
  { text: "Marketing" },
  { text: "Legal" },
  { text: "Finance" },
  { text: "Customer Service" },
  { text: "Purchasing" },
  { text: "Human Resource" },
  { text: "Secretary" },
  { text: "Promotion" },
  { text: "Information Technology" },
  { text: "General Service" },
  { text: "Other" },
];

const OWNERSHIP = [
  { label: "Pribadi", value: "pribadi" },
  { label: "Orang Tua", value: "ortu" },
];

const _roles = [`Full Time`, `Part Time`, `Contract`, `Intern`];

const _YEAR = [
  `2010`,
  `2011`,
  `2012`,
  `2013`,
  `2014`,
  `2015`,
  `2016`,
  `2017`,
  `2018`,
  `2019`,
  `2020`,
  `2021`,
  `2022`,
  `2023`,
  `2024`,
  `2025`,
];

const _carBrands = [
  `Toyota`,
  `Honda`,
  `Mitsubishi`,
  `Suzuki`,
  `Daihatsu`,
  `Nissan`,
  `Mazda`,
  `Hyundai`,
  `Wuling`,
  `Kia`,
  `Mercedes-Benz`,
  `BMW`,
  `Lexus`,
  `Isuzu`,
  `DFSK`,
  `Other`,
];

const _motorBrands = [
  `Honda`,
  `Yamaha`,
  `Suzuki`,
  `Kawasaki`,
  `Vespa`,
  `KTM`,
  `Ducati`,
  `BMW Motorrad`,
  `Benelli`,
  `Harley-Davidson`,
  `TVS`,
  `Royal Enfield`,
  `Aprilia`,
  `Piaggio`,
  `Triumph`,
  `Other`,
];

interface Props extends IFeedbackFormProps {
  id: ICandidateEntity["id"];
  current?: ICandidateEntity;
}

export function CandidateEditOtherForm(props: Props) {
  const { id, current, onSuccess } = props;

  const {
    methods,
    onSubmit,
    isLoading,
    isLoadingData,
  } = useCandidateOtherUpdate({
    id,
    current,
    onSuccess,
  });

  const bikeOwnership = methods.watch("bikeOwnership");
  const carOwnership = methods.watch("carOwnership");

  const character = (
    <Card>
      <CardHeader
        title="Sebutkan 3 kelebihan dan kekurang kamu"
        sx={{ mb: 3 }}
      />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {/* Kolom Kiri - Strengths */}
          <Grid xs={12} md={6}>
            <Box
              display="grid"
              rowGap={3}
              columnGap={2}
              gridTemplateColumns={{ xs: "repeat(1, 1fr)" }}
            >
              <Field.Text name="strengths[0].text" label="Kelebihan #1" />
              <Field.Text name="strengths[1].text" label="Kelebihan #2" />
              <Field.Text name="strengths[2].text" label="Kelebihan #3" />
            </Box>
          </Grid>

          {/* Kolom Kanan - Weaknesses */}
          <Grid xs={12} md={6}>
            <Box
              display="grid"
              rowGap={3}
              columnGap={2}
              gridTemplateColumns={{ xs: "repeat(1, 1fr)" }}
            >
              <Field.Text name="weaknesses[0].text" label="Kekurangan #1" />
              <Field.Text name="weaknesses[1].text" label="Kekurangan #2" />
              <Field.Text name="weaknesses[2].text" label="Kekurangan #3" />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Card>
  );

  const ownership = (
    <Card>
      <CardHeader title="Kepemilikan Kendaraan Bermotor" sx={{ mb: 3 }} />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {/* Kolom Kiri - Car Ownership */}
          <Grid xs={12} md={6}>
            <Box
              display="grid"
              rowGap={3}
              columnGap={2}
              gridTemplateColumns={{ xs: "repeat(1, 1fr)" }}
            >
              <Stack spacing={3}>
                {/* Switch untuk Kepemilikan Mobil */}
                <Field.Switch
                  name="carOwnership"
                  label="Kepemilikan Mobil (Yes/No)"
                />

                <Field.RadioGroup
                  row
                  name="experience"
                  label="Kepemilikan"
                  options={OWNERSHIP}
                  // disabled={!carOwnership}
                  sx={{ gap: 4 }}
                />

                <Box display="flex" flexDirection="row" columnGap={2}>
                
                  <Field.Autocomplete
                    name="carBrand"
                    label="Merek Mobil"
                    autoHighlight
                    disabled={!carOwnership}
                    sx={{ flex: 1 }}
                    options={_carBrands.map((option) => option)}
                    getOptionLabel={(option) => option}
                    renderOption={(props, option) => (
                      <li {...props} key={option}>
                        {option}
                      </li>
                    )}
                  />
                  <Field.Text
                    name="carModel"
                    label="Model Mobil"
                    placeholder="Avanza"
                    disabled={!carOwnership}
                    sx={{ flex: 1 }}
                  />
                  <Field.Autocomplete
                    name="carYear"
                    label="Tahun Mobil"
                    autoHighlight
                    disabled={!carOwnership}
                    sx={{ flex: 1 }}
                    options={_YEAR.map((option) => option)}
                    getOptionLabel={(option) => option}
                    renderOption={(props, option) => (
                      <li {...props} key={option}>
                        {option}
                      </li>
                    )}
                  />
                </Box>
              </Stack>
            </Box>
          </Grid>

          {/* Kolom Kanan - Bike Ownership */}
          <Grid xs={12} md={6}>
            <Box
              display="grid"
              rowGap={3}
              columnGap={2}
              gridTemplateColumns={{ xs: "repeat(1, 1fr)" }}
            >
              <Stack spacing={3}>
                <Field.Switch
                  name="bikeOwnership"
                  label="Kepemilikan Motor (Yes/No)"
                />

                <Field.RadioGroup
                  row
                  name="experience"
                  label="Kepemilikan"
                  options={OWNERSHIP}
                  // disabled={!bikeOwnership}
                  sx={{ gap: 4 }}
                />

                <Box display="flex" flexDirection="row" columnGap={2}>
                  <Field.Autocomplete
                    name="bikeBrand"
                    label="Merek Motor"
                    autoHighlight
                    disabled={!carOwnership}
                    sx={{ flex: 1 }}
                    options={_motorBrands.map((option) => option)}
                    getOptionLabel={(option) => option}
                    renderOption={(props, option) => (
                      <li {...props} key={option}>
                        {option}
                      </li>
                    )}
                  />
                  <Field.Text
                    name="bikeModel"
                    label="Model Motor"
                    placeholder="Mio M3"
                    disabled={!bikeOwnership}
                    sx={{ flex: 1 }}
                  />
                  <Field.Autocomplete
                    name="bikeYear"
                    label="Tahun Motor"
                    autoHighlight
                    disabled={!carOwnership}
                    sx={{ flex: 1 }}
                    options={_YEAR.map((option) => option)}
                    getOptionLabel={(option) => option}
                    renderOption={(props, option) => (
                      <li {...props} key={option}>
                        {option}
                      </li>
                    )}
                  />
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Card>
  );

  const work = (
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
          <Field.Autocomplete
            name="workTerm"
            label="Term kerja"
            autoHighlight
            options={_roles.map((option) => option)}
            getOptionLabel={(option) => option}
            renderOption={(props, option) => (
              <li {...props} key={option}>
                {option}
              </li>
            )}
          />
          <Field.Text
            name="expectedSalary"
            label="Berapa gaji yang Anda inginkan?"
            placeholder="4.000.000"
            type="number"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Box component="span" sx={{ color: "text.disabled" }}>
                    Rp.
                  </Box>
                </InputAdornment>
              ),
            }}
          />
          <Field.Text
            name="otherFacility"
            label="Fasilitas apa saja yang Anda inginkan selain gaji?"
          />
          <Field.Text
            name="availability"
            label="Kapan Anda dapat mulai bekerja? *"
          />
        </Box>
      </Stack>
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
          <Field.Autocomplete
            name="interest"
            label="Urutkan jenis pekerjaan yang Anda senangi"
            placeholder="+ Tags"
            multiple
            freeSolo
            disableCloseOnSelect
            options={_tags.map((tag) => tag.text)}
            getOptionLabel={(option) =>
              typeof option === "string" ? option : option.text
            }
            renderOption={(props, option) => (
              <li {...props} key={option}>
                {option}
              </li>
            )}
            renderTags={(selected, getTagProps) =>
              selected.map((option, index) => (
                <Chip
                  {...getTagProps({ index })}
                  key={option}
                  label={option}
                  size="small"
                  color="info"
                  variant="soft"
                />
              ))
            }
            onChange={(event, value) => {
              const formattedValue = value.map((item: any) =>
                typeof item === "string" ? { text: item } : item
              );
              methods.setValue("interest", formattedValue);
            }}
            value={methods.watch("interest")?.map((item) => item.text) || []}
          />

          <Field.Text
            name="reason"
            label="Alasan kenapa memilih 2 urutan pertama"
            multiline
            rows={4}
          />
        </Box>
      </Stack>
    </Card>
  );

  const interesting = (
    <Card>
      <CardHeader title="Details" sx={{ mb: 3 }} />

      <Divider />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Box
          rowGap={3}
          columnGap={2}
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
        >
          {/* Additional Details */}

          <Field.Text
            name="weight"
            label="Berat Badan"
            placeholder="70"
            type="number"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Box component="span" sx={{ color: "text.disabled" }}>
                    Kg.
                  </Box>
                </InputAdornment>
              ),
            }}
          />

          <Field.Text
            name="height"
            label="Tinggi Badan"
            placeholder="170"
            type="number"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Box component="span" sx={{ color: "text.disabled" }}>
                    Cm.
                  </Box>
                </InputAdornment>
              ),
            }}
          />

          <Field.Text
            name="hospitalized"
            label="Apakah Anda pernah dirawat di rumah sakit dan atau menderita sakit yang lama?"
            placeholder="Iya, Kecelakaan Motor"
            InputLabelProps={{ shrink: true }}
          />
          <Field.Text
            name="psychologicalTest"
            label="Apakah Anda pernah mengikuti evaluasi psikologis (psikotes)?"
            placeholder="Iya, Pernah 5 tahun lalu saat melamar pegawai negri"
            InputLabelProps={{ shrink: true }}
          />

          <Divider sx={{ borderStyle: "dashed" }} />
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        {/* <Stack alignItems="flex-end">
          <LoadingButton type="submit" variant="contained" loading={isLoading}>
            Save Changes
          </LoadingButton>
        </Stack> */}
      </Stack>
    </Card>
  );

  const save = (
    <Card>
      <Stack alignItems="flex-end">
        <Divider sx={{ borderStyle: "dashed" }} />
        <LoadingButton type="submit" variant="contained" loading={isLoading}>
          Save Changes
        </LoadingButton>
        <Divider sx={{ borderStyle: "dashed" }} />
      </Stack>
    </Card>
  );

  if (isLoadingData) {
    return <div>Loading...</div>;
  }

  return (
    <Stack spacing={3}>
      <Form methods={methods} onSubmit={onSubmit}>
        <Grid container spacing={3}>
          <Grid xs={12} md={12}>
            <Stack spacing={3}>{work}</Stack>
          </Grid>

          <Grid xs={12} md={12}>
            <Stack spacing={3}>{ownership}</Stack>
          </Grid>

          <Grid xs={12} md={12}>
            <Stack spacing={3}>{interesting}</Stack>
          </Grid>

          <Grid xs={12} md={12}>
            <Stack spacing={3}>{character}</Stack>
          </Grid>

          <Grid xs={12} md={12}>
            <Stack spacing={3}>{renderDetails}</Stack>
          </Grid>
          <Grid xs={12} md={12}>
            <Stack spacing={3}>{save}</Stack>
          </Grid>
        </Grid>
      </Form>
    </Stack>
  );
}
