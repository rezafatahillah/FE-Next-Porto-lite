"use client";

import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { paths } from "@/utils/routes";
import { errorResponseMap } from "@/utils/helpers";
import { useRouter } from "@/templates-ui/routes/hooks";
import { toast } from "@/templates-ui/components/snackbar";

import { IAccessRoleEntity } from "../../entities";
import { AccessRoleQuery } from "../queries";
import { AccessRoleCreateUpdateSchema } from "../../schemes";

// ----------------------------------------------------------------------

interface Props {
  current?: IAccessRoleEntity;
}

export const useAccessRoleCreateUpdate = (props: Props) => {
  const { current } = props;

  const id = current?.id || 0;
  const isUpdate = !!current;

  const router = useRouter();

  const methods = useForm({
    resolver: yupResolver(AccessRoleCreateUpdateSchema),
    defaultValues: {
      name: "",
      permissions: [],
    },
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
    setError,
    setValue,
  } = methods;

  useEffect(() => {
    if (current) {
      setValue("name", current.name);
      setValue(
        "permissions",
        current.permissions.map((item) => item.id)
      );
    }
  }, [current]);

  const storeMutation = AccessRoleQuery.useCreate({});

  const updateMutation = AccessRoleQuery.useUpdate({});

  const onCreate = handleSubmit(async (data) => {
    storeMutation.mutate(
      { payload: data },
      {
        onSuccess: (data) => {
          router.push(paths.backOffice.accounts.configs.roles.root);

          toast.success("Create success!");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed create!",
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

  const onUpdate = handleSubmit(async (data) => {
    updateMutation.mutate(
      { id, payload: data },
      {
        onSuccess: (data) => {
          router.push(paths.backOffice.accounts.configs.roles.root);

          toast.success("Update success!");
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed update!",
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

  const isCreateLoading = isSubmitting || storeMutation.isPending;

  const isUpdateLoading = isSubmitting || updateMutation.isPending;

  return {
    methods,
    onSubmit: isUpdate ? onUpdate : onCreate,

    isUpdate,
    isLoading: isUpdate ? isUpdateLoading : isCreateLoading,
  };
};
