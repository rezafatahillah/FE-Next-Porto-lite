"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { SkillLevelQuery } from "../../queries";
import { ISkillLevelEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useSkillLevelDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = SkillLevelQuery.useDelete({});

  const onSubmit = (id: ISkillLevelEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully deleted skill level!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete skill level!");
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
