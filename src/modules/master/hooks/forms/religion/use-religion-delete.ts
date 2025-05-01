"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { ReligionQuery } from "../../queries";
import { IReligionEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useReligionDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = ReligionQuery.useDelete({});

  const onSubmit = (id: IReligionEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully deleted religion!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete religion!");
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
