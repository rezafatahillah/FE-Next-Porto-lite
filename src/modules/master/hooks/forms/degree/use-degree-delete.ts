"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { DegreeQuery } from "../../queries";
import { IDegreeEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useDegreeDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = DegreeQuery.useDelete({});

  const onSubmit = (id: IDegreeEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully deleted degree!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete degree!");
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
