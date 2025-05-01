"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { AccountQuery } from "../queries";
import { IAccountEntity } from "../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useAccountDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = AccountQuery.useDelete({});

  const onSubmit = (id: IAccountEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Delete success!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete!");
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
