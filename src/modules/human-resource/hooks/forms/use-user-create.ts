"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { paths } from "@/utils/routes";
import { useRouter } from "@/templates-ui/routes/hooks";
import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";

import { UserQuery } from "../queries";
import { UserCreateSchema } from "../../schemes";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useUserCreate = (props: Props) => {
  const {} = props;

  const router = useRouter();

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(UserCreateSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
    watch,
    setError,
  } = methods;

  // ----------------------------------------------------------------------

  const mutation = UserQuery.useCreate({});

  const isLoading = isSubmitting || mutation.isPending;

  const onSubmit = handleSubmit(async (data) => {
    mutation.mutate(
      { payload: data },
      {
        onSuccess: (data) => {
          router.push(paths.backOffice.users.root);

          toast.success("Successfully create user!");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed create user!",
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
    onSubmit,
  };
};
