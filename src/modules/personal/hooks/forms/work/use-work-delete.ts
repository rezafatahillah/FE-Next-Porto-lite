"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { WorkQuery } from "../../queries";
import { IWorkEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useWorkDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = WorkQuery.useDelete({});

  const onSubmit = (id: IWorkEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully deleted work!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete work!");
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
