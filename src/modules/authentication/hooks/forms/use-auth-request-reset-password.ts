"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "@/templates-ui/components/snackbar";
import { useRouter } from "@/templates-ui/routes/hooks";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";
import { CONFIG } from "@/config-global";

import { AuthQuery } from "../queries";
import {
  AuthRequestResetPasswordSchema,
  IAuthRequestResetPasswordSchema,
} from "../../schemes";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useAuthRequestResetPassword = (props: Props) => {
  const {} = props;

  const router = useRouter();

  const methods = useForm<IAuthRequestResetPasswordSchema>({
    resolver: yupResolver(AuthRequestResetPasswordSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
    setError,
  } = methods;

  const requestResetPasswordMutation = AuthQuery.useRequestResetPassword({});

  const isLoading = isSubmitting || requestResetPasswordMutation.isPending;

  const onSubmit = handleSubmit(async (payload) => {
    requestResetPasswordMutation.mutate(
      {
        payload,
      },
      {
        onSuccess: (data) => {
          router.push(CONFIG.auth.redirectPath);

          toast.success("Successfully to request reset password");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed to request reset password!",
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

    isLoading,
    isSuccess: requestResetPasswordMutation.isSuccess,
    isError: requestResetPasswordMutation.isError,

    requestResetPasswordMutation,
    onSubmit,
  };
};
