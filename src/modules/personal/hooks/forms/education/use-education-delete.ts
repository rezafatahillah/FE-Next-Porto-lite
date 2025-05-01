"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { EducationQuery } from "../../queries";
import { IEducationEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useEducationDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = EducationQuery.useDelete({});

  const onSubmit = (id: IEducationEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully deleted education!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete education!");
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
