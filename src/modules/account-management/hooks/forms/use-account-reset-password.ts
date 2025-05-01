"use client";

import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps, IUnprocessableResponse } from "@/utils/entities";

import { AccountQuery } from "../queries";
import { IAccountEntity } from "../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  id: IAccountEntity["id"];
}

export const useAccountResetPassword = (props: Props) => {
  const { id, onSuccess } = props;

  // ----------------------------------------------------------------------

  const mutation = AccountQuery.useUpdateResetPassword({});

  const isLoading = mutation.isPending;

  const onSubmit = async () => {
    mutation.mutate(
      {
        id,
        payload: null,
      },
      {
        onSuccess: () => {
          onSuccess?.();

          toast.success("New password has been sent!");
        },
        onError: (error) => {
          const { message } = errorResponseMap<IUnprocessableResponse>(error, {
            message: "Failed to reset password!",
          });

          toast.error(message);
        },
      }
    );
  };

  return {
    isLoading,
    onSubmit,
  };
};
