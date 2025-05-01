"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { DiseaseQuery } from "../../queries";
import { IDiseaseEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useDiseaseDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = DiseaseQuery.useDelete({});

  const onSubmit = (id: IDiseaseEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully deleted disease!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete disease!");
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
