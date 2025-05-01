"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { UserQuery } from "../queries";
import { IUserEntity } from "../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useUserDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = UserQuery.useDelete({});

  const onSubmit = (id: IUserEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully deleted user!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete user!");
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
