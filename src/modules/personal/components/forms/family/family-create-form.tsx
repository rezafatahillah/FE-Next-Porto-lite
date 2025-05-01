"use client";

import { useFieldArray } from "react-hook-form";
import { Card, Stack, Box, Typography, MenuItem } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import LoadingButton from "@mui/lab/LoadingButton";

import { Field, Form } from "@/templates-ui/components/hook-form";

import { useFamilyCreate } from "../../../hooks";
import { CodeQuery } from "@/modules/personal";
import dayjs from "dayjs";

// ----------------------------------------------------------------------

interface Props {}

export function FamilyCreateForm(props: Props) {
  const {} = props;

  const {
    methods,

    onSubmit,
    isLoading,
  } = useFamilyCreate({});

  const { data: educationData } = CodeQuery.useGetEducationType({
    props: {},
    options: {
      staleTime: Infinity,
    },
  });

  const educationOption = educationData?.data || [];

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

  const file0 = (
    <Card sx={{ pt: 2, pb: 2, px: 3 }}>
      <Typography variant="h6" gutterBottom>
        Bapak <span style={{ color: "red" }}>*</span>
      </Typography>

      <Box sx={{ mb: 5 }}>
        <Field.Text
          name="familys[0].name"
          label="Nama Lengkap"
          required
          sx={{ flex: 1, mb: 2 }}
        />
        <Field.Text
          name="familys[0].status"
          label="Status"
          required
          sx={{ flex: 1, mb: 2 }}
          style={{ display: "none" }}
        />
        <Field.DatePicker
          name="familys[0].birthDate"
          label="Tanggal Lahir"
          sx={{ flex: 1, mb: 2 }}
          format="YYYY-MM-DD"
          minDate={dayjs("1950-01-01")}
          maxDate={dayjs()}
        />
        <Field.Select
          fullWidth
          name="familys[0].education"
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
          name="familys[0].job"
          label="Pekerjaan"
          required
          sx={{ flex: 1, mb: 2 }}
        />
        <Field.Text
          name="familys[0].main"
          label="Main"
          required
          sx={{ flex: 1, mb: 2 }}
          style={{ display: "none" }}
        />
      </Box>
    </Card>
  );

  const file1 = (
    <Card sx={{ pt: 2, pb: 2, px: 3 }}>
      <Typography variant="h6" gutterBottom>
        Ibu <span style={{ color: "red" }}>*</span>
      </Typography>

      <Box sx={{ mb: 5 }}>
        <Field.Text
          name="familys[1].name"
          label="Nama Lengkap"
          required
          sx={{ flex: 1, mb: 2 }}
        />
        <Field.Text
          name="familys[1].status"
          label="Status"
          required
          sx={{ flex: 1, mb: 2 }}
          style={{ display: "none" }}
        />
        <Field.DatePicker
          name="familys[1].birthDate"
          label="Tanggal Lahir"
          sx={{ flex: 1, mb: 2 }}
          format="YYYY-MM-DD"
          minDate={dayjs("1950-01-01")}
          maxDate={dayjs()}
        />
        <Field.Select
          fullWidth
          name="familys[1].education"
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
          name="familys[1].job"
          label="Pekerjaan"
          required
          sx={{ flex: 1, mb: 2 }}
        />
        <Field.Text
          name="familys[1].main"
          label="Main"
          required
          sx={{ flex: 1, mb: 2 }}
          style={{ display: "none" }}
        />
      </Box>
    </Card>
  );

  const file2 = (
    <Card sx={{ pt: 2, pb: 2, px: 3 }}>
      <Typography variant="h6" gutterBottom>
        Suami / Istri <span style={{ color: "red" }}>*</span>
      </Typography>

      <Box sx={{ mb: 5 }}>
        <Field.Text
          name="familys[2].name"
          label="Nama Lengkap"
          required
          sx={{ flex: 1, mb: 2 }}
        />
        <Field.Text
          name="familys[2].status"
          label="Status"
          required
          sx={{ flex: 1, mb: 2 }}
          style={{ display: "none" }}
        />
        <Field.DatePicker
          name="familys[2].birthDate"
          label="Tanggal Lahir"
          sx={{ flex: 1, mb: 2 }}
          format="YYYY-MM-DD"
          minDate={dayjs("1950-01-01")}
          maxDate={dayjs()}
        />
        <Field.Select
          fullWidth
          name="familys[2].education"
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
          name="familys[2].job"
          label="Pekerjaan"
          required
          sx={{ flex: 1, mb: 2 }}
        />
        <Field.Text
          name="familys[2].main"
          label="Main"
          required
          sx={{ flex: 1, mb: 2 }}
          style={{ display: "none" }}
        />
      </Box>
    </Card>
  );

  const file3 = (
    <>
      <Grid container spacing={3} sx={{ pt: 3, pb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Saudara Kandung
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        {siblings.map((_, index) => (
          <Grid xs={12} md={4} key={`sibling-${index}`}>
            <Stack spacing={3}>
              <Card sx={{ pt: 2, pb: 2, px: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Saudara {index + 1}
                </Typography>
                <Box sx={{ mb: 5 }}>
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
                    Remove
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
          Anak
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        {childrens.map((_, index) => (
          <Grid xs={12} md={4} key={`sibling-${index}`}>
            <Stack spacing={3}>
              <Card sx={{ pt: 2, pb: 2, px: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Saudara {index + 1}
                </Typography>
                <Box sx={{ mb: 5 }}>
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
                    Remove
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
                  name: "",
                  status: "FML002",
                  birthDate: "",
                  education: "",
                  job: "",
                  main: 1,
                })
              }
            >
              Tambah Anak
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </>
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
      </Grid>

      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Stack spacing={3}>{file2}</Stack>
        </Grid>
      </Grid>

      {file3}

      {file4}

      {/* <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Stack spacing={3}>{file4}</Stack>
        </Grid>
      </Grid> */}

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
