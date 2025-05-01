"use client";

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


import { useLanguageUpdate } from "../../../hooks";
import { ILanguageEntity } from "../../../entities";

import { CodeQuery } from "@/modules/personal";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  id: ILanguageEntity["id"];
  current?: ILanguageEntity;
}

export function LanguageEditGeneralForm(props: Props) {
  const { id, current, onSuccess } = props;

  const { activeFile, onUploading, methods, onSubmit, isLoading } = useLanguageUpdate({
    id,
    current,
    onSuccess,
  });

  const { data: levelData } = CodeQuery.useGetLevelType({
    props: {},
    options: {
      staleTime: Infinity,
    },
  });

  const levelOption = levelData?.data || [];

  const renderDetails = (
    <Card>
      <CardHeader title="Details" sx={{ mb: 3 }} />
      <Divider />
      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Field.Text name="name" label="Name" required sx={{ flex: 1 }} />
          <Field.Select
            fullWidth
            name="skillLevel"
            label="Status"
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
