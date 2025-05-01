"use client";

import {
  Card,
  Stack,
  Box,
  Divider,
  Typography,
  CardHeader,
  MenuItem,
  Chip,
} from "@mui/material";
import { useFieldArray } from "react-hook-form";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import LoadingButton from "@mui/lab/LoadingButton";

import { Field, Form } from "@/templates-ui/components/hook-form";

import { useEducationCreate, useEducationCreateMultiple } from "../../../hooks";
import { CodeQuery } from "../../../hooks";
import dayjs from "dayjs";

// ----------------------------------------------------------------------

const CITY = [
  "Jakarta",
  "Surabaya",
  "Bandung",
  "Medan",
  "Bekasi",
  "Tangerang",
  "Depok",
  "Semarang",
  "Palembang",
  "Makassar",
  "Bogor",
  "Batam",
  "Pekanbaru",
  "Malang",
  "Yogyakarta",
  "Denpasar",
  "Banjarmasin",
  "Samarinda",
  "Tasikmalaya",
  "Pontianak",
  "Cimahi",
  "Balikpapan",
  "Jambi",
  "Cirebon",
  "Kediri",
  "Solo (Surakarta)",
  "Padang",
  "Tangerang Selatan",
  "Manado",
  "Mataram",
  "Kupang",
  "Bengkulu",
  "Tanjungpinang",
  "Palangkaraya",
  "Ambon",
  "Jayapura",
  "Palu",
  "Kendari",
  "Madiun",
  "Tegal",
  "Probolinggo",
  "Magelang",
  "Blitar",
  "Kudus",
  "Salatiga",
  "Purwokerto",
  "Pamekasan",
  "Sukabumi",
  "Garut",
  "Cilacap",
];

interface Props {}

export function EducationCreateForm(props: Props) {
  const {} = props;

  const { methods, onSubmit, isLoading } = useEducationCreateMultiple({});

  const { data: statusData } = CodeQuery.useGetEducationStatus({
    props: {},
    options: {
      staleTime: Infinity,
    },
  });

  const { data: educationData } = CodeQuery.useGetEducationType({
    props: {},
    options: {
      staleTime: Infinity,
    },
  });

  const {
    fields: informals,
    append: appendInformal,
    remove: removeInformal,
  } = useFieldArray({
    name: "informals",
    control: methods.control,
  });

  const educationOption = educationData?.data || [];
  const statusOption = statusData?.data || [];

  const file3 = (
    <>
      <Grid container spacing={3}>
        <Typography variant="h6" gutterBottom>
          Pendidikan Informal
        </Typography>
        {informals.map((_, index) => (
          <Grid xs={12} key={`sibling-${index}`}>
            <Card sx={{ pt: 2, pb: 2, px: 3 }}>
              {/* Horizontal Layout */}
              <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
                <Field.Text
                  name={`informals[${index}].status`}
                  label="Status"
                  required
                  sx={{ flex: 1, minWidth: 200 }}
                  style={{ display: "none" }}
                />
                <Field.Text
                  name={`informals[${index}].education`}
                  label="Education"
                  required
                  sx={{ flex: 1, minWidth: 200 }}
                  style={{ display: "none" }}
                />
                <Field.Text
                  name={`informals[${index}].name`}
                  label="Training / Seminar"
                  required
                  sx={{ flex: 1, minWidth: 200 }}
                />
                <Field.Text
                  name={`informals[${index}].duration`}
                  label="Name"
                  type="number"
                  required
                  sx={{ flex: 1, minWidth: 200 }}
                />
                <Field.DatePicker
                  name={`informals[${index}].yearInformal`}
                  label="Tahun"
                  format="YYYY"
                  views={["year"]}
                  openTo="year"
                  minDate={dayjs("1970-01-01")}
                  maxDate={dayjs()}
                  sx={{ flex: 1, minWidth: 200 }}
                />

                <Field.Switch
                  name={`informals[${index}].certificate`}
                  label="Certificate"
                  sx={{ flex: 1, minWidth: 200 }}
                />

                <LoadingButton
                  variant="outlined"
                  color="error"
                  onClick={() => removeInformal(index)}
                  sx={{ flexShrink: 0 }}
                >
                  Remove
                </LoadingButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid xs={12}>
          <Stack direction="row" spacing={2}>
            <LoadingButton
              variant="contained"
              color="primary"
              onClick={() =>
                appendInformal({
                  status: "EDS002",
                  education: "EDU001",
                  name: "",
                  duration: undefined,
                  yearInformal: "",
                  certificate: false,
                })
              }
            >
              Tambah Pendidikan Informal
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </>
  );

  const renderDetails = (
    <Card>
      <CardHeader title="Pendidikan Formal" sx={{ mb: 3 }} />

      <Divider />

      <Stack spacing={4} sx={{ p: 3 }}>
        <Typography variant="body1" gutterBottom sx={{ color: "error.main" }}>
          * SD, SMP, SMA/SMK Wajib di isi.
        </Typography>

        {/* SD */}
        <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
          <Field.Text
            name="formals[0].status"
            label="Status"
            style={{ display: "none" }}
          />
          <Field.Text
            name="formals[0].education"
            label="Pendidikan"
            style={{ display: "none" }}
          />
          <Field.Text
            name="formals[0].name"
            label="SD"
            required
            sx={{ flex: 1 }}
          />
          <Field.Autocomplete
            name="formals[0].city"
            label="Kota"
            placeholder="+ Kota"
            freeSolo
            disableCloseOnSelect
            options={CITY}
            getOptionLabel={(option) => option}
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
            sx={{ flex: 1 }}
          />
          <Field.Text
            name="formals[0].study"
            label="Jurusan"
            required
            sx={{ flex: 1 }}
          />
          <Field.DatePicker
            name={`formals.${0}.yearStart`}
            label="Masuk"
            views={["year"]}
            minDate={dayjs("1970-01-01")}
            maxDate={dayjs()}
            format="YYYY"
            disableFuture
            sx={{ flex: 1 }}
          />
          <Field.DatePicker
            name={`formals.${0}.yearEnd`}
            label="Lulus"
            views={["year"]}
            format="YYYY"
            minDate={
              methods.watch(`formals.${0}.yearStart`) !== undefined
                ? dayjs(methods.watch(`formals.${0}.yearStart`) as string)
                : dayjs("1980-01-01")
            }
            maxDate={dayjs()}
            disableFuture
            sx={{ flex: 1 }}
          />
        </Box>

        {/* SMP */}
        <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
          <Field.Text
            name="formals[1].status"
            label="Status"
            style={{ display: "none" }}
          />
          <Field.Text
            name="formals[1].education"
            label="Pendidikan"
            style={{ display: "none" }}
          />
          <Field.Text
            name="formals[1].name"
            label="SMP"
            required
            sx={{ flex: 1 }}
          />
          <Field.Autocomplete
            name="formals[1].city"
            label="Kota"
            placeholder="+ Kota"
            freeSolo
            disableCloseOnSelect
            options={CITY}
            getOptionLabel={(option) => option}
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
            sx={{ flex: 1 }}
          />
          <Field.Text
            name="formals[1].study"
            label="Jurusan"
            required
            sx={{ flex: 1 }}
          />
          <Field.DatePicker
            name={`formals.${1}.yearStart`}
            label="Masuk"
            views={["year"]}
            minDate={dayjs("1970-01-01")}
            maxDate={dayjs()}
            format="YYYY"
            disableFuture
            sx={{ flex: 1 }}
          />
          <Field.DatePicker
            name={`formals.${1}.yearEnd`}
            label="Lulus"
            views={["year"]}
            format="YYYY"
            minDate={
              methods.watch(`formals.${1}.yearStart`) !== undefined
                ? dayjs(methods.watch(`formals.${1}.yearStart`) as string)
                : dayjs("1980-01-01")
            }
            maxDate={dayjs()}
            disableFuture
            sx={{ flex: 1 }}
          />
        </Box>

        {/* SMA */}
        <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
          <Field.Text
            name="formals[2].status"
            label="Status"
            style={{ display: "none" }}
          />
          <Field.Text
            name="formals[2].education"
            label="Pendidikan"
            style={{ display: "none" }}
          />
          <Field.Text
            name="formals[2].name"
            label="SMA/SMK"
            required
            sx={{ flex: 1 }}
          />
          <Field.Autocomplete
            name="formals[2].city"
            label="Kota"
            placeholder="+ Kota"
            freeSolo
            disableCloseOnSelect
            options={CITY}
            getOptionLabel={(option) => option}
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
            sx={{ flex: 1 }}
          />
          <Field.Text
            name="formals[2].study"
            label="Jurusan"
            required
            sx={{ flex: 1 }}
          />
          <Field.DatePicker
            name={`formals.${2}.yearStart`}
            label="Masuk"
            views={["year"]}
            minDate={dayjs("1970-01-01")}
            maxDate={dayjs()}
            format="YYYY"
            disableFuture
            sx={{ flex: 1 }}
          />
          <Field.DatePicker
            name={`formals.${2}.yearEnd`}
            label="Lulus"
            views={["year"]}
            format="YYYY"
            minDate={
              methods.watch(`formals.${2}.yearStart`) !== undefined
                ? dayjs(methods.watch(`formals.${2}.yearStart`) as string)
                : dayjs("1980-01-01")
            }
            maxDate={dayjs()}
            disableFuture
            sx={{ flex: 1 }}
          />
        </Box>

        {/* Diploma */}
        <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
          <Field.Text
            name="formals[3].status"
            label="Status"
            style={{ display: "none" }}
          />
          <Field.Text
            name="formals[3].education"
            label="Pendidikan"
            style={{ display: "none" }}
          />
          <Field.Text
            name="formals[3].name"
            label="Akademi(D3)"
            required
            sx={{ flex: 1 }}
          />
          <Field.Autocomplete
            name="formals[3].city"
            label="Kota"
            placeholder="+ Kota"
            freeSolo
            disableCloseOnSelect
            options={CITY}
            getOptionLabel={(option) => option}
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
            sx={{ flex: 1 }}
          />
          <Field.Text
            name="formals[3].study"
            label="Jurusan"
            required
            sx={{ flex: 1 }}
          />
          <Field.DatePicker
            name={`formals.${3}.yearStart`}
            label="Masuk"
            views={["year"]}
            minDate={dayjs("1970-01-01")}
            maxDate={dayjs()}
            format="YYYY"
            disableFuture
            sx={{ flex: 1 }}
          />
          <Field.DatePicker
            name={`formals.${3}.yearEnd`}
            label="Lulus"
            views={["year"]}
            format="YYYY"
            minDate={
              methods.watch(`formals.${3}.yearStart`) !== undefined
                ? dayjs(methods.watch(`formals.${3}.yearStart`) as string)
                : dayjs("1980-01-01")
            }
            maxDate={dayjs()}
            disableFuture
            sx={{ flex: 1 }}
          />
        </Box>

        {/* Sarjana */}
        <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
          <Field.Text
            name="formals[4].status"
            label="Status"
            style={{ display: "none" }}
          />
          <Field.Text
            name="formals[4].education"
            label="Pendidikan"
            style={{ display: "none" }}
          />
          <Field.Text
            name="formals[4].name"
            label="Sarjana(S1)"
            required
            sx={{ flex: 1 }}
          />
          <Field.Autocomplete
            name="formals[4].city"
            label="Kota"
            placeholder="+ Kota"
            freeSolo
            disableCloseOnSelect
            options={CITY}
            getOptionLabel={(option) => option}
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
            sx={{ flex: 1 }}
          />
          <Field.Text
            name="formals[4].study"
            label="Jurusan"
            required
            sx={{ flex: 1 }}
          />
          <Field.DatePicker
            name={`formals.${4}.yearStart`}
            label="Masuk"
            views={["year"]}
            minDate={dayjs("1970-01-01")}
            maxDate={dayjs()}
            format="YYYY"
            disableFuture
            sx={{ flex: 1 }}
          />
          <Field.DatePicker
            name={`formals.${4}.yearEnd`}
            label="Lulus"
            views={["year"]}
            format="YYYY"
            minDate={
              methods.watch(`formals.${4}.yearStart`) !== undefined
                ? dayjs(methods.watch(`formals.${4}.yearStart`) as string)
                : dayjs("1980-01-01")
            }
            maxDate={dayjs()}
            disableFuture
            sx={{ flex: 1 }}
          />
        </Box>

        {/* Magister */}
        <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
          <Field.Text
            name="formals[5].status"
            label="Status"
            style={{ display: "none" }}
          />
          <Field.Text
            name="formals[5].education"
            label="Pendidikan"
            style={{ display: "none" }}
          />
          <Field.Text
            name="formals[5].name"
            label="Magister"
            required
            sx={{ flex: 1 }}
          />
          <Field.Autocomplete
            name="formals[5].city"
            label="Kota"
            placeholder="+ Kota"
            freeSolo
            disableCloseOnSelect
            options={CITY}
            getOptionLabel={(option) => option}
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
            sx={{ flex: 1 }}
          />
          <Field.Text
            name="formals[5].study"
            label="Jurusan"
            required
            sx={{ flex: 1 }}
          />
          <Field.DatePicker
            name={`formals.${5}.yearStart`}
            label="Masuk"
            views={["year"]}
            minDate={dayjs("1970-01-01")}
            maxDate={dayjs()}
            format="YYYY"
            disableFuture
            sx={{ flex: 1 }}
          />
          <Field.DatePicker
            name={`formals.${5}.yearEnd`}
            label="Lulus"
            views={["year"]}
            format="YYYY"
            minDate={
              methods.watch(`formals.${5}.yearStart`) !== undefined
                ? dayjs(methods.watch(`formals.${5}.yearStart`) as string)
                : dayjs("1980-01-01")
            }
            maxDate={dayjs()}
            disableFuture
            sx={{ flex: 1 }}
          />
        </Box>

        {/* Doktor */}
        <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
          <Field.Text
            name="formals[6].status"
            label="Status"
            style={{ display: "none" }}
          />
          <Field.Text
            name="formals[6].education"
            label="Pendidikan"
            style={{ display: "none" }}
          />
          <Field.Text
            name="formals[6].name"
            label="Doktor(S3)"
            required
            sx={{ flex: 1 }}
          />
          <Field.Autocomplete
            name="formals[6].city"
            label="Kota"
            placeholder="+ Kota"
            freeSolo
            disableCloseOnSelect
            options={CITY}
            getOptionLabel={(option) => option}
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
            sx={{ flex: 1 }}
          />
          <Field.Text
            name="formals[6].study"
            label="Jurusan"
            required
            sx={{ flex: 1 }}
          />
          <Field.DatePicker
            name={`formals.${6}.yearStart`}
            label="Masuk"
            views={["year"]}
            minDate={dayjs("1970-01-01")}
            maxDate={dayjs()}
            format="YYYY"
            disableFuture
            sx={{ flex: 1 }}
          />
          <Field.DatePicker
            name={`formals.${6}.yearEnd`}
            label="Lulus"
            views={["year"]}
            format="YYYY"
            minDate={
              methods.watch(`formals.${6}.yearStart`) !== undefined
                ? dayjs(methods.watch(`formals.${6}.yearStart`) as string)
                : dayjs("1980-01-01")
            }
            maxDate={dayjs()}
            disableFuture
            sx={{ flex: 1 }}
          />
        </Box>
      </Stack>
    </Card>
  );

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12} md={12}>
          <Stack spacing={3}>
            {renderDetails}
            {file3}
            <Stack alignItems="flex-end">
              <LoadingButton
                type="submit"
                variant="contained"
                loading={isLoading}
              >
                Create
              </LoadingButton>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Form>
  );
}
