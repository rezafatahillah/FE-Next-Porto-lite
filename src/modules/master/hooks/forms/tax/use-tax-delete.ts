"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { TaxQuery } from "../../queries";
import { ITaxEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useTaxDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = TaxQuery.useDelete({});

  const onSubmit = (id: ITaxEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully deleted tax!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete tax!");
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
