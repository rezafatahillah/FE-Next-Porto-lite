"use client";

import { useEffect } from "react";
import { Card, Stack, Box, Divider, CardHeader } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import LoadingButton from "@mui/lab/LoadingButton";

import { Field, Form } from "@/templates-ui/components/hook-form";

import { useMedicalCreate } from "../../../hooks";
import { MedicalQuestionQuery } from "@/modules/master";

// ----------------------------------------------------------------------
const OWNERSHIP = [
  { label: "Tidak", value: "OPT001" },
  { label: "Ya", value: "OPT002" },
];

interface Props {}

export function MedicalCreateForm(props: Props) {
  const {} = props;

  const { methods, onSubmit, isLoading } = useMedicalCreate();

  const { setValue } = methods;

  const { data: diseaseData } = MedicalQuestionQuery.useGetAllCustom({
    props: {},
    options: {
      staleTime: Infinity,
    },
  });

  const diseaseOption = diseaseData?.data || [];

  console.log(diseaseOption);

 
  useEffect(() => {
    if (diseaseOption.length) {
      const defaultMedicals = diseaseOption.map((disease) => ({
        diseaseId: disease.id,
        answer: "",
      }));
      setValue("medicals", defaultMedicals);
    }
  }, [diseaseOption, setValue]);

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12} md={12}>
          <Stack spacing={3}>
            <Card>
              <CardHeader title="Details" sx={{ mb: 3 }} />
              <Divider />

              <Stack spacing={3} sx={{ p: 3 }}>
                {diseaseOption.map((disease, index) => (
                  <Box
                    key={disease.id}
                    rowGap={3}
                    columnGap={2}
                    display="grid"
                    // gridTemplateColumns="60% 10% 30%"
                    gridTemplateColumns="70%  30%"
                    alignItems="center"
                  >
                    <span>{disease.name}</span>

                    <Field.Text
                      name={`medicals[${index}].diseaseId`}
                      hidden
                      style={{ display: "none" }}
                    />

                    <Field.RadioGroup
                      row
                      name={`medicals[${index}].answer`}
                      options={OWNERSHIP}
                      sx={{ gap: 4 }}
                    />
                  </Box>
                ))}
              </Stack>
            </Card>

            <Stack alignItems="flex-end">
              <LoadingButton
                type="submit"
                variant="contained"
                loading={isLoading}
              >
                Submit
              </LoadingButton>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Form>
  );
}
