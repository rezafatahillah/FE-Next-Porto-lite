"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { MaritalStatusQuery } from "../../queries";
import { IMaritalStatusEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useMaritalStatusDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = MaritalStatusQuery.useDelete({});

  const onSubmit = (id: IMaritalStatusEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully deleted marital status!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete marital status!");
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
