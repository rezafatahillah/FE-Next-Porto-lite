"use client";

import { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { Field } from "@/templates-ui/components/hook-form";
import { Form } from "@/templates-ui/components/hook-form/form-provider";
import { IFeedbackFormProps } from "@/utils/entities";

import { IAccountEntity } from "../../entities";
import { useAccountUpdateUsername } from "../../hooks";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  current: IAccountEntity;

  open: boolean;
  onClose: VoidFunction;
}

export function AccountUpdateUsernameDialog(props: Props) {
  const { current, onSuccess, open, onClose } = props;

  const { methods, onSubmit, isLoading, onInit, onReset } =
    useAccountUpdateUsername({
      current,
      onSuccess: () => {
        onSuccess?.();
        handleClose();
      },
    });

  const handleClose = () => {
    onClose();
    onReset();
  };

  useEffect(() => {
    if (open) {
      onInit();
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Change Username</DialogTitle>

      <Form methods={methods} onSubmit={onSubmit}>
        <DialogContent>
          <Stack spacing={3} sx={{ pt: 1 }}>
            <Field.Text name="username" label="Email" />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" color="inherit" onClick={handleClose}>
            Cancel
          </Button>
          <LoadingButton
            variant="contained"
            loading={isLoading}
            onClick={onSubmit}
          >
            Submit
          </LoadingButton>
        </DialogActions>
      </Form>
    </Dialog>
  );
}
