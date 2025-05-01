import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IAuthEmailVerificationApiArgs,
  IAuthRefreshApiArgs,
  IAuthRequestResetPasswordApiArgs,
  IAuthResetPasswordApiArgs,
  IAuthSignInApiArgs,
  IAuthSignInResponse,
  IAuthSignUpApiArgs,
  IAuthSignUpResponse,
} from "../entities/auth-entity";
import { INoDataResponse } from "@/utils/entities";
import axios from "axios";
import { CONFIG } from "@/config-global";

// ----------------------------------------------------------------------

export class AuthApi {
  static signIn = async (args: IAuthSignInApiArgs) => {
    const result = await axiosInstance.post<IAuthSignInResponse>(
      endpoints.auth.signIn,
      args.payload
    );

    return result.data;
  };

  static refresh = async (args: IAuthRefreshApiArgs) => {
    const result = await axios.post<IAuthSignInResponse>(
      `${CONFIG.site.serverUrl}${endpoints.auth.refresh}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${args.payload.refreshToken}`,
        },
      }
    );

    return result.data;
  };

  static signUp = async (args: IAuthSignUpApiArgs) => {
    const result = await axiosInstance.post<IAuthSignUpResponse>(
      endpoints.auth.signUp,
      args.payload
    );

    return result.data;
  };

  static sendEmailVerification = async () => {
    const result = await axiosInstance.post<INoDataResponse>(
      endpoints.auth.sendEmailVerification
    );

    return result.data;
  };

  static emailVerification = async (args: IAuthEmailVerificationApiArgs) => {
    const result = await axiosInstance.post<INoDataResponse>(
      endpoints.auth.emailVerification,
      args.payload
    );

    return result.data;
  };

  static requestResetPassword = async (
    args: IAuthRequestResetPasswordApiArgs
  ) => {
    const result = await axiosInstance.post<INoDataResponse>(
      endpoints.auth.requestResetPassword,
      args.payload
    );

    return result.data;
  };

  static resetPassword = async (args: IAuthResetPasswordApiArgs) => {
    const result = await axiosInstance.post<INoDataResponse>(
      endpoints.auth.resetPassword,
      args.payload
    );

    return result.data;
  };

  static logout = async () => {
    const result = await axiosInstance.delete<INoDataResponse>(
      endpoints.auth.logout
    );

    return result.data;
  };
}
