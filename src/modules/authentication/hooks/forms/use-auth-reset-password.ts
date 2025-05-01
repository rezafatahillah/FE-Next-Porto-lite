"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "@/templates-ui/components/snackbar";
import { useRouter, useSearchParams } from "@/templates-ui/routes/hooks";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";
import { CONFIG } from "@/config-global";

import { AuthQuery } from "../queries";
import {
  AuthResetPasswordSchema,
  IAuthResetPasswordSchema,
} from "../../schemes";
import { useBoolean } from "@/templates-ui/hooks/use-boolean";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useAuthResetPassword = (props: Props) => {
  const {} = props;

  const router = useRouter();
  const searchParams = useSearchParams();

  const methods = useForm<IAuthResetPasswordSchema>({
    resolver: yupResolver(AuthResetPasswordSchema),
    defaultValues: {
      code: "",
      password: "",
      passwordConfirmation: "",
    },
    mode: "onChange",
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
    setError,
  } = methods;

  const requestResetPasswordMutation = AuthQuery.useResetPassword({});

  const passwordToggle = useBoolean();
  const isLoading = isSubmitting || requestResetPasswordMutation.isPending;

  const onSubmit = handleSubmit(async (payload) => {
    requestResetPasswordMutation.mutate(
      {
        payload: {
          ...payload,
          signed: searchParams.get("signed") || "",
          token: searchParams.get("token") || "",
        },
      },
      {
        onSuccess: (data) => {
          router.push(CONFIG.auth.redirectPath);

          toast.success("Successfully to reset password");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed to reset password!",
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
    isSuccess: requestResetPasswordMutation.isSuccess,
    isError: requestResetPasswordMutation.isError,

    requestResetPasswordMutation,
    onSubmit,
  };
};
