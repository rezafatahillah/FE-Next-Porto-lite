"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";

import { UserQuery } from "../queries";
import { UserUpdateSchema } from "../../schemes";
import { IUserEntity } from "../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  id: IUserEntity["id"];
  current?: IUserEntity;
}

export const useUserUpdate = (props: Props) => {
  const { id, current, onSuccess } = props;

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(UserUpdateSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
    setValue,
    setError,
  } = methods;

  useEffect(() => {
    if (current) {
      setValue("name", current.name);
      setValue("email", current.email);
    }
  }, [current]);

  const mutation = UserQuery.useUpdate({});

  const isLoading = isSubmitting || mutation.isPending;

  const onSubmit = handleSubmit(async (data) => {
    mutation.mutate(
      { id, payload: data },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully updated user!");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed update user!",
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
    onSubmit,

    isLoading,
  };
};
