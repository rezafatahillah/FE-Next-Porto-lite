"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";
import { IProfileEntity } from "../../entities";
import { ProfileUpdateProfileSchema } from "../../schemes";
import { ProfileQuery } from "../queries";
import { useGetOwnSession } from "../helpers";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {
  current: IProfileEntity;
}

export const useUpdateProfile = (props: Props) => {
  const { current, onSuccess } = props;
  const { session, update } = useGetOwnSession();

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(ProfileUpdateProfileSchema),
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
    setValue,
    setError,
  } = methods;

  // ----------------------------------------------------------------------

  const onInit = () => {
    setValue("name", current.name);
  };

  // ----------------------------------------------------------------------

  const mutation = ProfileQuery.useUpdateProfile({});

  const isLoading = isSubmitting || mutation.isPending;

  const onSubmit = handleSubmit(async (data) => {
    mutation.mutate(
      { payload: data },
      {
        onSuccess: async () => {
          onSuccess?.();

          await update({
            ...session,
            profile: {
              ...session?.profile,
              name: data.name,
            },
          });

          toast.success("Update success!");
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

  return {
    methods,

    onInit,

    isLoading,
    onSubmit,
  };
};
