"use client";

import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps } from "@/utils/entities";
import { NotificationQuery } from "./query";
import { INotificationEntity } from "../entities";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useNotificationRead = (props: Props) => {
  const { onSuccess } = props;

  // ----------------------------------------------------------------------

  const mutation = NotificationQuery.useRead({});

  const onSubmit = async ({ id }: INotificationEntity) => {
    mutation.mutate(
      {
        id,
        payload: null,
      },
      {
        onSuccess: (data) => {
          onSuccess?.();
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed to read notification!",
          });

          toast.error(message);
        },
      }
    );
  };

  return {
    isLoading: mutation.isPending,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,

    onSubmit,
  };
};

export const useNotificationReadAll = (props: Props) => {
  const { onSuccess } = props;

  // ----------------------------------------------------------------------

  const mutation = NotificationQuery.useReadAll({});

  const onSubmit = async () => {
    mutation.mutate(
      {
        payload: null,
      },
      {
        onSuccess: (data) => {
          onSuccess?.();
        },
        onError: (error) => {
          const { message, fields } = errorResponseMap(error, {
            message: "Failed to read all notification!",
          });

          toast.error(message);
        },
      }
    );
  };

  return {
    isLoading: mutation.isPending,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,

    onSubmit,
  };
};

export const useNotificationDeleteAll = (props: Props) => {
  const { onSuccess } = props;

  // ----------------------------------------------------------------------

  const mutation = NotificationQuery.useDeleteAll({});

  const onSubmit = async () => {
    mutation.mutate(null, {
      onSuccess: (data) => {
        onSuccess?.();
      },
      onError: (error) => {
        const { message, fields } = errorResponseMap(error, {
          message: "Failed to delete all notification!",
        });

        toast.error(message);
      },
    });
  };

  return {
    isLoading: mutation.isPending,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,

    onSubmit,
  };
};
