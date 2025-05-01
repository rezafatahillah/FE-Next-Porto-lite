"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { MedicalQuery } from "../../queries";
import { IMedicalEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useMedicalDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = MedicalQuery.useDelete({});

  const onSubmit = (id: IMedicalEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully deleted skill!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete skill!");
        },
      }
    );
  };

  const isLoading = mutation.isPending;

  return {
    onSubmit,

    isLoading,
  };
};
