"use client";

import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";

import { AccountStatusCodeEnum } from "@/modules/core";

import { AccountQuery } from "../queries";
import { AccountUpdateStatusSchema } from "../../schemes";
import { IAccountEntity } from "../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  current: IAccountEntity;
}

export const useAccountUpdateStatus = (props: Props) => {
  const { current, onSuccess } = props;

  const { id, status } = current;

  const methods = useForm({
    resolver: yupResolver(AccountUpdateStatusSchema),
    defaultValues: {},
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
    setError,
  } = methods;

  // ----------------------------------------------------------------------

  const [isEnabled, setIsEnabled] = useState(
    status === AccountStatusCodeEnum.Enable
  );

  useEffect(() => {
    setIsEnabled(status === AccountStatusCodeEnum.Enable);
  }, [current.status]);

  // ----------------------------------------------------------------------

  const mutation = AccountQuery.useUpdateStatus({});

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

          setIsEnabled((prev) => !prev);

          toast.success("Status has been changed!");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed to change status!",
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

    isEnabled,

    isLoading,
    onSubmit,
  };
};
