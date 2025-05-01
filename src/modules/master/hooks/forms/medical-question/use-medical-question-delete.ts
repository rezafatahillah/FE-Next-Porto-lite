"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { MedicalQuestionQuery } from "../../queries";
import { IMedicalQuestionEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useMedicalQuestionDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = MedicalQuestionQuery.useDelete({});

  const onSubmit = (id: IMedicalQuestionEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully deleted medical question!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete medical question!");
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
