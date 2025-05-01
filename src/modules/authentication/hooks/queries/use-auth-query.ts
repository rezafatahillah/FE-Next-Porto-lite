import { useMutation } from "@tanstack/react-query";
import { signIn, SignInResponse } from "next-auth/react";

import { IHookQueryMutation } from "@/utils/entities/hook-entity";

import {
  IAuthEmailVerificationApiArgs,
  IAuthRequestResetPasswordApiArgs,
  IAuthResetPasswordApiArgs,
  IAuthSignInApiArgs,
  IAuthSignUpApiArgs,
} from "../../entities";
import { AuthApi } from "../../apis";
import { INoDataResponse, IUnprocessableResponse } from "@/utils/entities";

// ----------------------------------------------------------------------

export class AuthQuery {
  static useSignIn = (
    args: IHookQueryMutation<IAuthSignInApiArgs, SignInResponse | undefined>
  ) => {
    return useMutation({
      mutationKey: ["AuthQuery-signIn"],
      mutationFn: async (props) => {
        const { payload } = props;

        const result = await signIn("credentials", {
          username: payload.username,
          password: payload.password,
          rememberMe: payload.rememberMe,
          redirect: false,
        });

        if (result?.error) {
          throw JSON.parse(result.error);
        }

        return result;
      },
      ...args.options,
    });
  };

  static useSignUp = (
    args: IHookQueryMutation<IAuthSignUpApiArgs, SignInResponse | undefined>
  ) => {
    return useMutation({
      mutationKey: ["AuthQuery-signUp"],
      mutationFn: async (props) => {
        const { payload } = props;

        await AuthApi.signUp({
          payload,
        });

        const result = await signIn("credentials", {
          username: payload.email,
          password: payload.password,
          rememberMe: false,
          redirect: false,
        });

        if (result?.error) {
          throw JSON.parse(result.error);
        }

        return result;
      },
      ...args.options,
    });
  };

  static useEmailVerification = (
    args: IHookQueryMutation<
      IAuthEmailVerificationApiArgs,
      INoDataResponse,
      IUnprocessableResponse
    >
  ) => {
    return useMutation({
      mutationKey: ["AuthQuery-emailVerification"],
      mutationFn: async (props) => {
        const { payload } = props;

        return await AuthApi.emailVerification({
          payload,
        });
      },
      ...args.options,
    });
  };

  static useSendEmailVerification = (
    args: IHookQueryMutation<null, INoDataResponse, IUnprocessableResponse>
  ) => {
    return useMutation({
      mutationKey: ["AuthQuery-sendEmailVerification"],
      mutationFn: AuthApi.sendEmailVerification,
      ...args.options,
    });
  };

  static useRequestResetPassword = (
    args: IHookQueryMutation<IAuthRequestResetPasswordApiArgs, INoDataResponse>
  ) => {
    return useMutation({
      mutationKey: ["AuthQuery-requestResetPassword"],
      mutationFn: async (props) => {
        const { payload } = props;

        return await AuthApi.requestResetPassword({
          payload,
        });
      },
      ...args.options,
    });
  };

  static useResetPassword = (
    args: IHookQueryMutation<IAuthResetPasswordApiArgs, INoDataResponse>
  ) => {
    return useMutation({
      mutationKey: ["AuthQuery-resetPassword"],
      mutationFn: async (props) => {
        const { payload } = props;

        return await AuthApi.resetPassword({
          payload,
        });
      },
      ...args.options,
    });
  };

  static useLogout = () => {
    return useMutation({
      mutationKey: ["AuthQuery-logout"],
      mutationFn: () => AuthApi.logout(),
    });
  };
}
