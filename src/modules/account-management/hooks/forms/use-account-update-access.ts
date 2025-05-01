"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";

import { AccountQuery } from "../queries";
import { AccountUpdateAccessSchema } from "../../schemes";
import { IAccountEntity } from "../../entities";
import { useEffect } from "react";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  current: IAccountEntity;
}

export const useAccountUpdateAccess = (props: Props) => {
  const { current, onSuccess } = props;

  const { id } = current;

  const methods = useForm({
    resolver: yupResolver(AccountUpdateAccessSchema),
    defaultValues: {
      roleId: current.role.id,
      permissions: current.permissions?.map((p) => p.id) || [],
    },
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
    setError,
    resetField,
    setValue,
  } = methods;

  useEffect(() => {
    if (current) {
      setValue("roleId", current.role.id);
    }
  }, [current]);

  // ----------------------------------------------------------------------

  const onInit = () => {};

  const onReset = () => {
    resetField("permissions");
  };

  // ----------------------------------------------------------------------

  const mutation = AccountQuery.useUpdateAccess({});

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

          toast.success("Access has been changed!");
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

    onInit,
    onReset,

    isLoading,
    onSubmit,
  };
};
