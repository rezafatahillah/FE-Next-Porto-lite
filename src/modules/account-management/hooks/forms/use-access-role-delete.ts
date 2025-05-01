"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { AccessRoleQuery } from "../queries";
import { IAccessRoleEntity } from "../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useAccessRoleDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = AccessRoleQuery.useDelete({});

  const onSubmit = (id: IAccessRoleEntity["id"]) => {
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
