"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { SkillCommonQuery } from "../../queries";
import { ISkillCommonEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useSkillCommonDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = SkillCommonQuery.useDelete({});

  const onSubmit = (id: ISkillCommonEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully deleted skill common!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete skill common!");
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
