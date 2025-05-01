"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { LanguageQuery } from "../../queries";
import { ILanguageEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useLanguageDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = LanguageQuery.useDelete({});

  const onSubmit = (id: ILanguageEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully deleted language!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete language!");
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
