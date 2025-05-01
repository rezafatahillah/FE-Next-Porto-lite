"use client";

import { toast } from "@/templates-ui/components/snackbar";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps, IUnprocessableResponse } from "@/utils/entities";

import { AuthQuery } from "../queries";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useAuthSendEmailVerification = (props: Props) => {
  const {} = props;

  const sendEmailVerificationMutation = AuthQuery.useSendEmailVerification({});

  const onSubmit = async () => {
    sendEmailVerificationMutation.mutate(null, {
      onSuccess: (data) => {
        toast.success("Successfully sent email verification");
      },
      onError: (error) => {
        const { message } = errorResponseMap<IUnprocessableResponse>(error, {
          message: "Failed to send email verification!",
        });

        toast.error(message);
      },
    });
  };

  return {
    isLoading: sendEmailVerificationMutation.isPending,
    isSuccess: sendEmailVerificationMutation.isSuccess,
    isError: sendEmailVerificationMutation.isError,

    sendEmailVerificationMutation,
    onSubmit,
  };
};
