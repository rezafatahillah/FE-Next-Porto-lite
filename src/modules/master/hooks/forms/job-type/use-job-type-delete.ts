"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { JobTypeQuery } from "../../queries";
import { IJobTypeEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useJobTypeDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = JobTypeQuery.useDelete({});

  const onSubmit = (id: IJobTypeEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully deleted job type!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete job type!");
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
