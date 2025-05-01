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
import { AuthSignUpSchema, IAuthSignUpSchema } from "../../schemes";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useAuthSignUp = (props: Props) => {
  const {} = props;

  const router = useRouter();

  const methods = useForm<IAuthSignUpSchema>({
    resolver: yupResolver(AuthSignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
    setError,
  } = methods;

  const signUpMutation = AuthQuery.useSignUp({});

  const passwordToggle = useBoolean();
  const isLoading = isSubmitting || signUpMutation.isPending;

  const onSubmit = handleSubmit(async (payload) => {
    signUpMutation.mutate(
      {
        payload,
      },
      {
        onSuccess: (data) => {
          router.push(CONFIG.auth.redirectPath);

          toast.success("Successfully registered");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed to sign up!",
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

    signUpMutation,
    onSubmit,
  };
};
