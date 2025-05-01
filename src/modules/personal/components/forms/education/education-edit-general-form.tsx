"use client";

import {
  Card,
  Stack,
  Divider,
  CardHeader,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import LoadingButton from "@mui/lab/LoadingButton";

import { Field, Form } from "@/templates-ui/components/hook-form";

import { useEducationUpdate } from "../../../hooks";

import { useFieldArray } from "react-hook-form";
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

export function EducationEditGeneralForm() {
  const { methods, onSubmit, isLoading, loading } = useEducationUpdate();

  const { fields: formals } = useFieldArray({
    name: "formals",
    control: methods.control,
  });

  const {
    fields: informals,
    append: appendInformal,
    remove: removeInformal,
  } = useFieldArray({
    name: "informals",
    control: methods.control,
  });

  const formal = (
    <>
      <Card>
        <CardHeader title="Pendidikan Formal" sx={{ mb: 3 }} />

        <Divider />

        <Stack spacing={4} sx={{ p: 3 }}>
          <Typography variant="body1" gutterBottom sx={{ color: "error.main" }}>
            * SD, SMP, SMA/SMK Wajib di isi.
          </Typography>
          {formals.map((formal, index) => (
            <Box
              key={`formal-${index}`}
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={2}
            >
              <Field.Text
                name={`formals[${index}].id`}
                label="Id"
                required
                style={{ display: "none" }}
              />
              <Field.Text
                name={`formals[${index}].status`}
                label="Status"
                style={{ display: "none" }}
              />
              <Field.Text
                name={`formals[${index}].education`}
                label="Pendidikan"
                style={{ display: "none" }}
              />
              <Field.Text
                name={`formals[${index}].name`}
                // label={formal.education}
                label={formal.education === "EDU001"
                  ? "SD"
                  : formal.education === "EDU002"
                  ? "SMP"
                  : formal.education === "EDU003"
                  ? "SMA/SMK"
                  : formal.education === "EDU004"
                  ? "Diploma (D1-D3)"
                  : formal.education === "EDU005"
                  ? "Sarjana (S1)"
                  : formal.education === "EDU006"
                  ? "Magister (S2)"
                  : formal.education === "EDU007"
                  ? "Doktor (S3)"
                  : "Nama Instansi"}
                required
              />
              <Field.Autocomplete
                name={`formals[${index}].city`}
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
              />
              <Field.Text
                name={`formals[${index}].study`}
                label="Jurusan"
                required
              />
              <Field.DatePicker
                name={`formals.${index}.yearStart`}
                label="Masuk"
                views={["year"]}
                minDate={dayjs("1970-01-01")}
                maxDate={dayjs()}
                format="YYYY"
                disableFuture
                // value={methods.watch(`formals.${index}.yearStart`) || null}
              />
              <Field.DatePicker
                name={`formals.${index}.yearEnd`}
                label="Lulus"
                views={["year"]}
                format="YYYY"
                minDate={
                  methods.watch(`formals.${index}.yearStart`) !== undefined
                    ? dayjs(
                        methods.watch(`formals.${index}.yearStart`) as string
                      )
                    : dayjs("1980-01-01")
                }
                maxDate={dayjs()}
                disableFuture
              />
            </Box>
          ))}
        </Stack>
      </Card>
    </>
  );

  const informal = (
    <>
      <Card>
        <CardHeader title="Pendidikan Informal" sx={{ mb: 3 }} />

        <Divider />

        <Stack spacing={4} sx={{ p: 3 }}>
          {informals.map((informal, index) => (
            <Box
              key={`informal-${index}`}
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={2}
            >
              <Field.Text
                name={`informals[${index}].id`}
                label="Id"
                required
                style={{ display: "none" }}
              />
              <Field.Text
                name={`informals[${index}].status`}
                label="Status"
                required
                style={{ display: "none" }}
              />
              <Field.Text
                name={`informals[${index}].education`}
                label="Education"
                required
                style={{ display: "none" }}
              />
              <Field.Text
                name={`informals[${index}].name`}
                label="Training / Seminar"
                required
              />
              <Field.Text
                name={`informals[${index}].duration`}
                label="Durasi"
                type="number"
                required
              />
              <Field.DatePicker
                name={`informals[${index}].yearInformal`}
                label="Tahun"
                format="YYYY"
                views={["year"]}
                openTo="year"
                minDate={dayjs("1970-01-01")}
                maxDate={dayjs()}
              />

              <Field.Switch
                name={`informals[${index}].certificate`}
                label="Sertifikasi?"
              />

              <LoadingButton
                variant="outlined"
                color="error"
                onClick={() => removeInformal(index)}
                sx={{ flexShrink: 0 }}
              >
                Hapus
              </LoadingButton>
            </Box>
          ))}
        </Stack>
      </Card>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Stack spacing={3}>
            <LoadingButton
              variant="contained"
              color="primary"
              onClick={() =>
                appendInformal({
                  id: 0,
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

  return (
    <>
      {loading === true ? (
        <Typography>Loading data...</Typography>
      ) : (
        <Form methods={methods} onSubmit={onSubmit}>
          <Grid container spacing={3}>
            <Grid xs={12} md={12}>
              <Stack spacing={3}>
                {formal}
                {informal}
                <Stack alignItems="flex-end">
                  <LoadingButton
                    type="submit"
                    variant="contained"
                    loading={isLoading}
                  >
                    Update
                  </LoadingButton>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Form>
      )}
    </>
  );
}
