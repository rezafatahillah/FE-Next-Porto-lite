"use client";

import { useState } from "react";
import {
  Card,
  Stack,
  Divider,
  CardHeader,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import LoadingButton from "@mui/lab/LoadingButton";

import { Field, Form } from "@/templates-ui/components/hook-form";
import { IFeedbackFormProps } from "@/utils/entities";


import { useOrganizationUpdate } from "../../../hooks";
import { IOrganizationEntity } from "../../../entities";
import dayjs from "dayjs";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  id: IOrganizationEntity["id"];
  current?: IOrganizationEntity;
}

export function OrganizationEditGeneralForm(props: Props) {
  const { id, current, onSuccess } = props;

  const { activeFile, onUploading, methods, onSubmit, isLoading } = useOrganizationUpdate({
    id,
    current,
    onSuccess,
  });

  const [year, setYear] = useState<number | null>(null);

  const handleYearChange = (newValue: any) => {
    if (newValue) {
      const yearOnly = newValue.year();
      setYear(yearOnly);
      methods.setValue("year", yearOnly);
    }
  };

  const renderDetails = (
    <Card>
      <CardHeader title="Details" sx={{ mb: 3 }} />
      <Divider />
      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Field.Text
            name="name"
            label="Name Organization"
            required
            sx={{ flex: 1 }}
          />
          <Field.Text
            name="type"
            label="Type Organization"
            required
            sx={{ flex: 1 }}
          />
          <Field.DatePicker
            name="year"
            label="Year"
            value={year ? dayjs().year(year) : null}
            onChange={handleYearChange}
            views={["year"]}
            format="YYYY"
            minDate={dayjs("1970")}
            maxDate={dayjs()}
            sx={{ flex: 1 }}
          />

          <Field.Text
            name="position"
            label="Job Position"
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
