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
import { fData } from "@/templates-ui/utils/format-number";
import { BYTES_ON_MB } from "@/utils/constants";
import { IFeedbackFormProps } from "@/utils/entities";

import { FileCodeEnum } from "@/modules/core";

import { useSkillUpdate } from "../../../hooks";
import { ISkillEntity } from "../../../entities";

import { CodeQuery } from "@/modules/personal";
import { SkillCommonQuery } from "@/modules/master";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  id: ISkillEntity["id"];
  current?: ISkillEntity;
}

export function SkillEditGeneralForm(props: Props) {
  const { id, current, onSuccess } = props;

  const { activeFile, onUploading, methods, onSubmit, isLoading } = useSkillUpdate({
    id,
    current,
    onSuccess,
  });

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
          <Field.Select
            fullWidth
            name="skillCommonId"
            label="Status"
            InputLabelProps={{ shrink: true }}
            sx={{ flex: 1 }}
            // defaultValue={current?.category.id}
            // defaultValue={0}
          >
            {commonOption.map((option) => (
              <MenuItem
                key={option.id}
                value={option.id}
                sx={{ textTransform: "capitalize" }}
              >
                {option.name}
              </MenuItem>
            ))}
          </Field.Select>
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
                Save Change
              </LoadingButton>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Form>
  );
}
