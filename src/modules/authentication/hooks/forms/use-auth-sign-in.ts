"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "@/templates-ui/components/snackbar";
import { useBoolean } from "@/templates-ui/hooks/use-boolean";
import { useRouter } from "@/templates-ui/routes/hooks";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";
import { CONFIG } from "@/config-global";

import { AuthQuery } from "../queries";
import { AuthSignInSchema, IAuthSignInSchema } from "../../schemes";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useAuthSignIn = (props: Props) => {
  const {} = props;

  const router = useRouter();

  const methods = useForm<IAuthSignInSchema>({
    resolver: yupResolver(AuthSignInSchema),
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
    mode: "onChange",
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
    setError,
  } = methods;

  const signInMutation = AuthQuery.useSignIn({});

  const passwordToggle = useBoolean();
  const isLoading = isSubmitting || signInMutation.isPending;

  const onSubmit = handleSubmit(async (payload) => {
    signInMutation.mutate(
      {
        payload,
      },
      {
        onSuccess: (data) => {
          router.push(CONFIG.auth.redirectPath);

          toast.success("Successfully logged in");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed to signIn!",
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

    signInMutation,
    onSubmit,
  };
};
