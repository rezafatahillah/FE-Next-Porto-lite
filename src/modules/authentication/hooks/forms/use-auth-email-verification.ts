"use client";

import { toast } from "@/templates-ui/components/snackbar";
import { useRouter, useSearchParams } from "@/templates-ui/routes/hooks";
import { errorResponseMap } from "@/utils/helpers";
import { IFeedbackFormProps, IUnprocessableResponse } from "@/utils/entities";
import { CONFIG } from "@/config-global";

import { AuthQuery } from "../queries";
import { useEffect } from "react";
import { useGetOwnSession } from "../helpers";
import dayjs from "dayjs";

// ----------------------------------------------------------------------

interface Props extends IFeedbackFormProps {}

export const useAuthEmailVerification = (props: Props) => {
  const {} = props;

  const { session, update } = useGetOwnSession();
  const router = useRouter();
  const searchParams = useSearchParams();

  const emailVerificationMutation = AuthQuery.useEmailVerification({});

  useEffect(() => {
    emailVerificationMutation.mutate(
      {
        payload: {
          signed: searchParams.get("signed") || "",
          token: searchParams.get("token") || "",
        },
      },
      {
        onSuccess: async (data) => {
          await update({
            ...session,
            profile: {
              ...session?.profile,
              emailVerifiedAt: dayjs().format(),
            },
          });

          router.push(CONFIG.auth.redirectPath);

          toast.success("Successfully verify email");
        },
        onError: (error) => {
          const { message } = errorResponseMap<IUnprocessableResponse>(error, {
            message: "Failed to email verification!",
          });

          toast.error(message);
        },
      }
    );
  }, []);

  return {
    isLoading: emailVerificationMutation.isPending,
    isSuccess: emailVerificationMutation.isSuccess,
    isError: emailVerificationMutation.isError,

    emailVerificationMutation,
  };
};
