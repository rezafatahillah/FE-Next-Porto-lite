"use client";

import { useEffect, useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { toast } from "@/templates-ui/components/snackbar";
import { useBoolean } from "@/templates-ui/hooks/use-boolean";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";

import { IUserEntity } from "@/modules/human-resource";

import { AccountQuery } from "../queries";
import { AccountCreateSchema } from "../../schemes";
import { IAccessPermissionEntity } from "../../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useAccountCreate = (props: Props) => {
  const { onSuccess } = props;

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(AccountCreateSchema),
    defaultValues: {
      permissions: [],
    },
  });

  // ----------------------------------------------------------------------

  const {
    formState: { isSubmitting },
    handleSubmit,
    setError,
    setValue,
  } = methods;

  const [permissions, setPermissions] =
    useState<Pick<IAccessPermissionEntity, "id" | "slug" | "action">[]>();

  useEffect(() => {
    if (permissions) {
      setValue(
        "permissions",
        permissions.map((item) => item.id)
      );
    }
  }, [permissions]);

  // ----------------------------------------------------------------------

  const passwordToggle = useBoolean();

  const [user, setUser] = useState<IUserEntity>();

  const handleSelectUser = (value: IUserEntity) => {
    setUser(value);
    setValue("userId", value.id);
  };

  // ----------------------------------------------------------------------

  const mutation = AccountQuery.useCreate({});

  const [isLoading, setIsLoading] = useState<boolean>(
    isSubmitting || mutation.isPending
  );

  const onSubmit = handleSubmit(async (data) => {
    mutation.mutate(
      {
        payload: data,
      },
      {
        onSuccess: (data) => {
          onSuccess?.();

          toast.success("Successfully create user account!");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed to create user account!",
          });

          toast.error(message);
          setIsLoading(false);

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
    values: {
      user,
    },

    passwordToggle,
    setPermissions,

    handleSelectUser,

    isLoading,
    onSubmit,
  };
};
