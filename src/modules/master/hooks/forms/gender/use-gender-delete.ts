"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { GenderQuery } from "../../queries";
import { IGenderEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useGenderDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = GenderQuery.useDelete({});

  const onSubmit = (id: IGenderEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully deleted gender!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete gender!");
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
