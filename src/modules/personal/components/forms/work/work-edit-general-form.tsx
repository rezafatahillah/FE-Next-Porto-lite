"use client";

import { useState } from "react";
import { Card, Stack, Divider, CardHeader } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import LoadingButton from "@mui/lab/LoadingButton";

import { Field, Form } from "@/templates-ui/components/hook-form";
import { IFeedbackFormProps } from "@/utils/entities";

import { useWorkUpdate } from "../../../hooks";
import { IWorkEntity } from "../../../entities";
import dayjs from "dayjs";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  id: IWorkEntity["id"];
  current?: IWorkEntity;
}

export function WorkEditGeneralForm(props: Props) {
  const { id, current, onSuccess } = props;

  const [stillWorking, setStillWorking] = useState(false);

  const [salary, setSalary] = useState("");

  const { methods, onSubmit, isLoading } =
    useWorkUpdate({
      id,
      current,
      onSuccess,
    });

  const handleSwitchClick = (event: React.SyntheticEvent) => {
    const newChecked = (event.target as HTMLInputElement).checked;
    console.log("Switch is now:", newChecked); 
    setStillWorking(newChecked);
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, "");
    setSalary(formatWithThousandsSeparator(value));
  };

  const handleSalaryFocus = () => {
    setSalary((prev) => prev.replace(/\./g, ""));
  };

  const handleSalaryBlur = () => {
    const rawValue = salary.replace(/\./g, "");
    methods.setValue("salary", parseInt(rawValue, 10));
    setSalary(formatWithThousandsSeparator(rawValue));
  };

  const formatWithThousandsSeparator = (value: string) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const renderDetails = (
    <Card>
      <CardHeader title="Details" sx={{ mb: 3 }} />
      <Divider />
      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack direction="row" spacing={2}>
          {/* Kolom Kiri */}
          <Stack flex={1} spacing={2}>
            <Field.Text name="companyName" label="Nama Perusahaan" required />
            <Stack direction="row" spacing={2}>
              <Field.DatePicker
                name="start"
                label="Mulai Kerja"
                views={["year", "month"]}
                format="MMMM - YYYY"
                minDate={dayjs("1980-01-01")}
                maxDate={dayjs()}
                disableFuture
                // onChange={(date) => {
                //   if (date) {
                //     const formattedValue = dayjs(date)
                //       .startOf("month")
                //       .format("YYYY-MM-DD");
                //     methods.setValue("start", formattedValue);
                //     // console.log(formattedValue);
                //   }
                // }}
                sx={{ flex: 1 }}
              />
            </Stack>
            <Field.Text name="supervisor" label="Supervisor" required />
            <Field.Text
              name="jobdesk"
              label="Apa yang kamu kerjakan"
              required
              multiline
              rows={4}
            />
          </Stack>

          {/* Kolom Kanan */}
          <Stack flex={1} spacing={2}>
            <Field.Text name="position" label="Posisi kamu saat itu" required />
            <Stack direction="row" spacing={2} alignItems="center">
              <Field.Switch
                name="stillWorking"
                label="Masih bekerja di sini"
                checked={stillWorking}
                onClick={handleSwitchClick}
              />

              {!stillWorking && (
                <Field.DatePicker
                  name="end"
                  label="Berakhir Kerja"
                  views={["year", "month"]}
                  format="MMMM - YYYY"
                  minDate={
                    methods.watch("start")
                      ? dayjs(methods.watch("start"))
                      : dayjs("1980-01-01")
                  }
                  maxDate={dayjs()}
                  disableFuture
                  sx={{ flex: 1 }}
                />
              )}
            </Stack>

            <Field.Text
              name="salary"
              label="Gaji"
              placeholder="5.000.000"
              // value={salary}
              // onChange={handleSalaryChange}
              // onFocus={handleSalaryFocus}
              // onBlur={handleSalaryBlur}
              InputLabelProps={{ shrink: true }}
            />

            <Field.Text
              name="reason"
              label="Alasan Keluar"
              required
              multiline
              rows={4}
            />
          </Stack>
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
                Save Change
              </LoadingButton>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Form>
  );
}
