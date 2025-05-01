"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useBoolean } from "@/templates-ui/hooks/use-boolean";
import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";
import { ProfileUpdatePasswordSchema } from "../../schemes";
import { ProfileQuery } from "../queries";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useUpdateProfilePassword = (props: Props) => {
  const { onSuccess } = props;

  const methods = useForm({
    resolver: yupResolver(ProfileUpdatePasswordSchema),
    defaultValues: {
      currentPassword: "",
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

  const mutation = ProfileQuery.useUpdatePassword({});

  const isLoading = isSubmitting || mutation.isPending;

  const onSubmit = handleSubmit(async (data) => {
    mutation.mutate(
      {
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
