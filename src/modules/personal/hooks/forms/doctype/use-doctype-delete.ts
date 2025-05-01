"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { DoctypeQuery } from "../../queries";
import { IDoctypeEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useDoctypeDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = DoctypeQuery.useDelete({});

  const onSubmit = (id: IDoctypeEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully deleted doctype!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete doctype!");
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
