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

import { useEducationCreateMultiple, FamilyQuery } from "../../../hooks";
import { DegreeQuery } from "@/modules/master";

// ----------------------------------------------------------------------

interface Props {}

export function EducationCreateMultipleForm(props: Props) {
  const {} = props;

  const {
    methods,

    onSubmit,
    isLoading,
  } = useEducationCreateMultiple({});

  const { data: familyData } = FamilyQuery.useGetAll({
    props: {},
    options: {
      staleTime: Infinity,
    },
  });

  const { data: degreeData } = DegreeQuery.useGetAll({
    props: {},
    options: {
      staleTime: Infinity,
    },
  });

  const familyOption = familyData?.data || [];
  const educationOption = degreeData?.data || [];

  const renderDetails = (
    <Card>
      <CardHeader title="Details" sx={{ mb: 3 }} />
      <Divider />
      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Field.Text name="education" label="Education" required />
          <Field.Text name="name" label="Name" required />
          <Field.Text name="city" label="City" required />
          <Field.Text name="status" label="status" required />
          <Field.Text name="study" label="study" required />
          <Field.Text name="yearStart" label="yearStart" required />
          <Field.Text name="yearEnd" label="yearStart" required />
          <Field.Text name="sponsoredBy" label="Sponsor" required />
        </Stack>
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
