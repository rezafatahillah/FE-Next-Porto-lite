"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";

import { AccountQuery } from "../queries";
import { AccountUpdateUsernameSchema } from "../../schemes";
import { IAccountEntity } from "../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  current: IAccountEntity;
}

export const useAccountUpdateUsername = (props: Props) => {
  const { current, onSuccess } = props;

  const { id } = current;

  const methods = useForm({
    resolver: yupResolver(AccountUpdateUsernameSchema),
    defaultValues: {},
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
    setError,
    resetField,
    setValue,
  } = methods;

  // ----------------------------------------------------------------------

  const onInit = () => {
    setValue("username", current.username);
  };

  const onReset = () => {
    resetField("username");
  };

  // ----------------------------------------------------------------------

  const mutation = AccountQuery.useUpdateUsername({});

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

          toast.success("Username has been changed!");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed to update username!",
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

    onInit,
    onReset,

    isLoading,
    onSubmit,
  };
};
