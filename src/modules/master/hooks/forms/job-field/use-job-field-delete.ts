"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { JobFieldQuery } from "../../queries";
import { IJobFieldEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useJobFieldDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = JobFieldQuery.useDelete({});

  const onSubmit = (id: IJobFieldEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully deleted job field!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete job field!");
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
