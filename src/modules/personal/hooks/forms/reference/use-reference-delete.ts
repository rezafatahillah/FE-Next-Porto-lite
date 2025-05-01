"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { ReferenceQuery } from "../../queries";
import { IReferenceEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useReferenceDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = ReferenceQuery.useDelete({});

  const onSubmit = (id: IReferenceEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully deleted reference!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete reference!");
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
