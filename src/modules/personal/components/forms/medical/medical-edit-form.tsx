"use client";

import { useEffect } from "react";
import { Card, Stack, Box, Divider, CardHeader } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import LoadingButton from "@mui/lab/LoadingButton";

import { Field, Form } from "@/templates-ui/components/hook-form";

import { useMedicalUpdate } from "../../../hooks";
import { MedicalQuery } from "../../../hooks";

// ----------------------------------------------------------------------
const OPTION = [
  { label: "Tidak", value: "OPT001" },
  { label: "Ya", value: "OPT002" },
];

interface Props {}

export function MedicalEditForm(props: Props) {
  const {} = props;

  const { methods, onSubmit, isLoading } = useMedicalUpdate();

  const { setValue } = methods;

  const { data: medicalData } = MedicalQuery.useGetAllCustom({
    props: {},
    options: {
      staleTime: Infinity,
    },
  });

  const medicalList = medicalData?.data || [];

  useEffect(() => {
    if (medicalList?.length) {
      const defaultMedicals = medicalList.map((payload) => ({
        id: payload.id,
        diseaseId: payload.diseaseId.id,
        answer: payload.answer.code,
      }));
      setValue("medicals", defaultMedicals);
    }
  }, [medicalData, setValue]);

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12} md={12}>
          <Stack spacing={3}>
            <Card>
              <CardHeader title="Details" sx={{ mb: 3 }} />
              <Divider />

              <Stack spacing={3} sx={{ p: 3 }}>
                {medicalList?.map((medical, index) => (
                  <Box
                    key={medical.id}
                    rowGap={3}
                    columnGap={2}
                    display="grid"
                    // gridTemplateColumns="60% 10% 30%"
                    gridTemplateColumns="70% 30%"
                    alignItems="center"
                  >
                    <span>{medical.diseaseId?.name || "Unknown"}</span>{" "}
                    <Field.Text
                      name={`medicals[${index}].diseaseId`}
                      value={medical.diseaseId.id}
                      style={{display:"none"}}
                    />
                    <Field.RadioGroup
                      row
                      name={`medicals[${index}].answer`}
                      defaultValue={medical.answer.code}
                      options={OPTION}
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
