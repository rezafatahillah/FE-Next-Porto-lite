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
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import LoadingButton from "@mui/lab/LoadingButton";

import { Field, Form } from "@/templates-ui/components/hook-form";

import { useSkillCreate } from "../../../hooks";

import { CodeQuery } from "@/modules/personal";
import { SkillCommonQuery } from "@/modules/master";

// ----------------------------------------------------------------------

interface Props {}

export function SkillCreateForm(props: Props) {
  const {} = props;

  const {
    methods,

    onSubmit,
    isLoading,
  } = useSkillCreate({});

  const { data: commonData } = SkillCommonQuery.useGetAll({
    props: {},
    options: {
      staleTime: Infinity,
    },
  });

  const { data: levelData } = CodeQuery.useGetLevelType({
    props: {},
    options: {
      staleTime: Infinity,
    },
  });

  const commonOption = commonData?.data || [];
  const levelOption = levelData?.data || [];

  console.log("common", commonOption);

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
          {/* <Field.Autocomplete
            name="skillCommonId"
            label="Tags"
            placeholder="+ Keahlian"
            // multiple
            freeSolo
            disableCloseOnSelect
            options={commonOption.map((option) => option.name)} 
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
          /> */}
          <Field.Autocomplete
            name="skillCommonId"
            label="Keahlian"
            placeholder="+ Keahlian"
            freeSolo
            disableCloseOnSelect
            options={commonOption.map((option) => option.name)}
            getOptionLabel={(option) => option || ""}
            onChange={(event, value) => {
              methods.setValue("skillCommonId", value);
              // console.log("Selected skillCommonId:", value);
            }}
            onInputChange={(event, value) => {
              methods.setValue("skillCommonId", value);
              // console.log("Typed skillCommonId:", value);
            }}
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

          <Field.Select
            fullWidth
            name="skillLevel"
            label="Penguasaan"
            InputLabelProps={{ shrink: true }}
            sx={{ flex: 1 }}
            // defaultValue={current?.category.id}
            // defaultValue={0}
          >
            {levelOption.map((option) => (
              <MenuItem
                key={option.code}
                value={option.code}
                sx={{ textTransform: "capitalize" }}
              >
                {option.name}
              </MenuItem>
            ))}
          </Field.Select>
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
