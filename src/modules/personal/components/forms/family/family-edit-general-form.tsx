"use client";

import {
  Card,
  Stack,
  Divider,
  CardHeader,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import LoadingButton from "@mui/lab/LoadingButton";

import { Field, Form } from "@/templates-ui/components/hook-form";

import { useFamilyUpdate } from "../../../hooks";

import { CodeQuery } from "@/modules/personal";
import { useFieldArray } from "react-hook-form";
import dayjs from "dayjs";

// ----------------------------------------------------------------------

export function FamilyEditGeneralForm() {
  const { methods, onSubmit, isLoading, loading } = useFamilyUpdate();

  const { data: educationData } = CodeQuery.useGetEducationType({
    props: {},
    options: {
      staleTime: Infinity,
    },
  });

  const educationOption = educationData?.data || [];

  const { fields: familys } = useFieldArray({
    name: "familys",
    control: methods.control,
  });

  const {
    fields: siblings,
    append: appendSibling,
    remove: removeSibling,
  } = useFieldArray({
    name: "siblings",
    control: methods.control,
  });

  const {
    fields: childrens,
    append: appendChild,
    remove: removeChild,
  } = useFieldArray({
    name: "childrens",
    control: methods.control,
  });

  const file5 = (
    <>
      <Grid container spacing={3} sx={{ pt: 3, pb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Saudara Kandung
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        {/* {JSON.stringify(familys)} */}
        {familys.map((family, index) => (
          <Grid xs={12} md={4} key={index}>
            <Stack spacing={3}>
              <Card sx={{ pt: 2, pb: 2, px: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {family.status === "FML003"
                    ? "Bapak"
                    : family.status === "FML004"
                    ? "Ibu"
                    : family.status === "FML001"
                    ? "Suami/Istri"
                    : ""}
                </Typography>
                <Box sx={{ mb: 5 }}>
                  <Field.Text
                    name={`familys[${index}].id`}
                    label="Id"
                    required
                    sx={{ flex: 1, mb: 2 }}
                    style={{ display: "none" }}
                  />
                  <Field.Text
                    name={`familys[${index}].name`}
                    label="Nama Lengkap"
                    required
                    sx={{ flex: 1, mb: 2 }}
                  />
                  <Field.Text
                    name={`familys[${index}].status`}
                    label="Status"
                    required
                    sx={{ flex: 1, mb: 2 }}
                    style={{ display: "none" }}
                  />
                  <Field.DatePicker
                    name={`familys[${index}].birthDate`}
                    label="Tanggal Lahir"
                    sx={{ flex: 1, mb: 2 }}
                    format="YYYY-MM-DD"
                    minDate={dayjs("1950-01-01")}
                    maxDate={dayjs()}
                  />
                  <Field.Select
                    fullWidth
                    name={`familys[${index}].education`}
                    label="Pendidikan"
                    InputLabelProps={{ shrink: true }}
                    sx={{ flex: 1, mb: 2 }}
                    // value={family.education}
                    defaultValue={family?.education || ''}
                  >
                    {educationOption.map((option) => (
                      <MenuItem
                        key={option.code}
                        value={option.code}
                        sx={{ textTransform: "capitalize" }}
                      >
                        {option.name}
                      </MenuItem>
                    ))}
                  </Field.Select>
                  <Field.Text
                    name={`familys[${index}].job`}
                    label="Pekerjaan"
                    required
                    sx={{ flex: 1, mb: 2 }}
                  />
                  <Field.Text
                    name={`familys[${index}].main`}
                    label="Main"
                    required
                    sx={{ flex: 1, mb: 2 }}
                    style={{ display: "none" }}
                  />
                </Box>
              </Card>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </>
  );

  const file3 = (
    <>
      <Grid container spacing={3} sx={{ pt: 3, pb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Data Keluarga Utama
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        {siblings.map((sibling, index) => (
          <Grid xs={12} md={4} key={`sibling-${index}`}>
            <Stack spacing={3}>
              <Card sx={{ pt: 2, pb: 2, px: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Saudara {index + 1}
                </Typography>
                <Box sx={{ mb: 5 }}>
                  <Field.Text
                    name={`siblings[${index}].id`}
                    label="Id"
                    required
                    sx={{ flex: 1, mb: 2 }}
                    style={{ display: "none" }}
                  />
                  <Field.Text
                    name={`siblings[${index}].name`}
                    label="Nama Lengkap"
                    required
                    sx={{ flex: 1, mb: 2 }}
                  />
                  <Field.Text
                    name={`siblings[${index}].status`}
                    label="Status"
                    required
                    sx={{ flex: 1, mb: 2 }}
                    style={{ display: "none" }}
                  />
                  <Field.DatePicker
                    name={`siblings[${index}].birthDate`}
                    label="Tanggal Lahir"
                    sx={{ flex: 1, mb: 2 }}
                    format="YYYY-MM-DD"
                    minDate={dayjs("1950-01-01")}
                    maxDate={dayjs()}
                  />
                  <Field.Select
                    fullWidth
                    name={`siblings[${index}].education`}
                    label="Pendidikan"
                    InputLabelProps={{ shrink: true }}
                    sx={{ flex: 1, mb: 2 }}
                    value={sibling.education}
                  >
                    {educationOption.map((option) => (
                      <MenuItem
                        key={option.code}
                        value={option.code}
                        sx={{ textTransform: "capitalize" }}
                      >
                        {option.name}
                      </MenuItem>
                    ))}
                  </Field.Select>
                  <Field.Text
                    name={`siblings[${index}].job`}
                    label="Pekerjaan"
                    required
                    sx={{ flex: 1, mb: 2 }}
                  />
                  <Field.Text
                    name={`siblings[${index}].main`}
                    label="Main"
                    required
                    sx={{ flex: 1, mb: 2 }}
                    style={{ display: "none" }}
                  />
                  <LoadingButton
                    variant="outlined"
                    color="error"
                    onClick={() => removeSibling(index)}
                  >
                    Hapus
                  </LoadingButton>
                </Box>
              </Card>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Stack spacing={3}>
            <LoadingButton
              variant="contained"
              color="primary"
              onClick={() =>
                appendSibling({
                  id: 0,
                  name: "",
                  status: "FML005",
                  birthDate: "",
                  education: "",
                  job: "",
                  main: 1,
                })
              }
            >
              Tambah Saudara Kandung
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </>
  );

  const file4 = (
    <>
      <Grid container spacing={3} sx={{ pt: 3, pb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Data Anak Kandung
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        {childrens.map((_, index) => (
          <Grid xs={12} md={4} key={`children-${index}`}>
            <Stack spacing={3}>
              <Card sx={{ pt: 2, pb: 2, px: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Anak {index + 1}
                </Typography>
                <Box sx={{ mb: 5 }}>
                  <Field.Text
                    name={`childrens[${index}].id`}
                    label="Id"
                    required
                    sx={{ flex: 1, mb: 2 }}
                    style={{ display: "none" }}
                  />
                  <Field.Text
                    name={`childrens[${index}].name`}
                    label="Nama Lengkap"
                    required
                    sx={{ flex: 1, mb: 2 }}
                  />
                  <Field.Text
                    name={`childrens[${index}].status`}
                    label="Status"
                    required
                    sx={{ flex: 1, mb: 2 }}
                    style={{ display: "none" }}
                  />
                  <Field.DatePicker
                    name={`childrens[${index}].birthDate`}
                    label="Tanggal Lahir"
                    sx={{ flex: 1, mb: 2 }}
                    format="YYYY-MM-DD"
                    minDate={dayjs("1950-01-01")}
                    maxDate={dayjs()}
                  />
                  <Field.Select
                    fullWidth
                    name={`childrens[${index}].education`}
                    label="Pendidikan"
                    InputLabelProps={{ shrink: true }}
                    sx={{ flex: 1, mb: 2 }}
                  >
                    {educationOption.map((option) => (
                      <MenuItem
                        key={option.code}
                        value={option.code}
                        sx={{ textTransform: "capitalize" }}
                      >
                        {option.name}
                      </MenuItem>
                    ))}
                  </Field.Select>
                  <Field.Text
                    name={`childrens[${index}].job`}
                    label="Pekerjaan"
                    required
                    sx={{ flex: 1, mb: 2 }}
                  />
                  <Field.Text
                    name={`childrens[${index}].main`}
                    label="Main"
                    required
                    sx={{ flex: 1, mb: 2 }}
                    style={{ display: "none" }}
                  />
                  <LoadingButton
                    variant="outlined"
                    color="error"
                    onClick={() => removeChild(index)}
                  >
                    Hapus
                  </LoadingButton>
                </Box>
              </Card>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Stack spacing={3}>
            <LoadingButton
              variant="contained"
              color="primary"
              onClick={() =>
                appendChild({
                  id: 0,
                  name: "",
                  status: "FML002",
                  birthDate: "",
                  education: "",
                  job: "",
                  main: 1,
                })
              }
            >
              Tambah Anak Kandung
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
          {file5}
          {file3}
          {file4}

          <Grid container spacing={3}>
            <Grid component="div" xs={12}>
              <LoadingButton
                type="submit"
                variant="contained"
                loading={isLoading}
                fullWidth
              >
                Update Data
              </LoadingButton>
            </Grid>
          </Grid>
        </Form>
      )}
    </>
  );
}
