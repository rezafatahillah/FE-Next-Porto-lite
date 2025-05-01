"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { OrganizationQuery } from "../../queries";
import { IOrganizationEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useOrganizationDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = OrganizationQuery.useDelete({});

  const onSubmit = (id: IOrganizationEntity["id"]) => {
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
