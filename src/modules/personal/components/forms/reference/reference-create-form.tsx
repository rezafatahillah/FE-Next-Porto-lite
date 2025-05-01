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
import { fData } from "@/templates-ui/utils/format-number";
import { BYTES_ON_MB } from "@/utils/constants";

import { FileCodeEnum } from "@/modules/core";

import { useReferenceCreate } from "../../../hooks";

// ----------------------------------------------------------------------

interface Props {}

export function ReferenceCreateForm(props: Props) {
  const {} = props;

  const {
    methods,

    onSubmit,
    isLoading,
  } = useReferenceCreate({});

  const renderDetails = (
    <Card>
      <CardHeader title="Details" sx={{ mb: 3 }} />
      <Divider />
      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Field.Text name="name" label="Name" required sx={{ flex: 1 }} />
          <Field.Text
            name="address"
            label="Address"
            required
            sx={{ flex: 1 }}
          />
          <Field.Text
            name="phone"
            label="Phone"
            placeholder="081399994444"
            type="number"
            required
            sx={{ flex: 1 }}
          />
          <Field.Text
            name="position"
            label="Position"
            required
            sx={{ flex: 1 }}
          />
          <Field.Text
            name="relation"
            label="Relation"
            required
            sx={{ flex: 1 }}
          />
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
