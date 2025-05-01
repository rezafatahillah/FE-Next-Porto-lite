"use client";

import { IFeedbackFormProps } from "@/utils/entities";
import { toast } from "@/templates-ui/components/snackbar";

import { SkillQuery } from "../../queries";
import { ISkillEntity } from "../../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useSkillDelete = (props: Props) => {
  const { onSuccess, onFailed } = props;

  const mutation = SkillQuery.useDelete({});

  const onSubmit = (id: ISkillEntity["id"]) => {
    mutation.mutate(
      { id },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully deleted skill!");
        },
        onError: (error) => {
          onFailed?.();

          toast.error("Failed delete skill!");
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
