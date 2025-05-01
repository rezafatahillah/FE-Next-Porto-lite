"use client";

import {
  Card,
  Stack,
  Box,
  Divider,
  CardHeader,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Typography,
  Switch,
} from "@mui/material";

import { Field } from "@/templates-ui/components/hook-form";
import { Iconify } from "@/templates-ui/components/iconify";
import { IFeedbackFormProps } from "@/utils/entities";
import { useBoolean } from "@/templates-ui/hooks/use-boolean";

import { IAccountEntity } from "../../entities";
import { useAccountUpdateStatus } from "../../hooks";
import { AccountUpdateUsernameDialog } from "../dialogs";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  current: IAccountEntity;
}

export function AccountUpdateProfileForm(props: Props) {
  const { current, onSuccess } = props;

  const { name, username } = current;

  const { isEnabled, onSubmit: handleUpdateStatus } = useAccountUpdateStatus({
    current,
  });

  const changeUsernameDialog = useBoolean();

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
          <TextField label="Full name" value={name} disabled />

          <TextField
            label="Email"
            value={username}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={changeUsernameDialog.onTrue}>
                    <Iconify icon="solar:pen-bold" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={{ mb: 5 }}>
          <FormControlLabel
            labelPlacement="start"
            label={
              <>
                <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                  Account activation
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Disabling this will automatically deactivate the user&apos;s
                  login access
                </Typography>
              </>
            }
            control={<Switch checked={isEnabled} />}
            onChange={handleUpdateStatus}
            sx={{
              mx: 0,
              width: 1,
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "left",
            }}
          />
        </Box>
      </Stack>
    </Card>
  );

  return (
    <>
      <Stack spacing={3}>{renderDetails}</Stack>

      <AccountUpdateUsernameDialog
        current={current}
        open={changeUsernameDialog.value}
        onClose={changeUsernameDialog.onFalse}
        onSuccess={onSuccess}
      />
    </>
  );
}
