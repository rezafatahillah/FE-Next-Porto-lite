"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { FamilyQuery } from "../../queries";
import { IFamilyEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useFamilyDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = FamilyQuery.useDelete({});

  const onSubmit = (id: IFamilyEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully deleted family!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete family!");
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
