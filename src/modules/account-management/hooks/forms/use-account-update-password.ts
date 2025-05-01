"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useBoolean } from "@/templates-ui/hooks/use-boolean";
import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";

import { AccountQuery } from "../queries";
import { AccountUpdatePasswordSchema } from "../../schemes";
import { IAccountEntity } from "../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  id: IAccountEntity["id"];
}

export const useAccountUpdatePassword = (props: Props) => {
  const { id, onSuccess } = props;

  const methods = useForm({
    resolver: yupResolver(AccountUpdatePasswordSchema),
    defaultValues: {
      password: "",
      passwordConfirmation: "",
    },
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
    setError,
    reset,
  } = methods;

  // ----------------------------------------------------------------------

  const passwordToggle = useBoolean();

  // ----------------------------------------------------------------------

  const mutation = AccountQuery.useUpdatePassword({});

  const isLoading = isSubmitting || mutation.isPending;

  const onSubmit = handleSubmit(async (data) => {
    mutation.mutate(
      {
        id,
        payload: data,
      },
      {
        onSuccess: (data) => {
          onSuccess?.();

          reset();

          toast.success("Password has been changed!");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed to change password!",
          });

          toast.error(message);

          fields.forEach((item) => {
            setError(item.field, {
              message: item.message,
            });
          });
        },
      }
    );
  });

  return {
    methods,

    passwordToggle,

    isLoading,
    onSubmit,
  };
};
