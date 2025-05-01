import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IAccountCreateApiArgs,
  IAccountDeleteApiArgs,
  IAccountGetAllApiArgs,
  IAccountGetAllResponse,
  IAccountGetDetailsApiArgs,
  IAccountGetDetailsResponse,
  IAccountUpdateAccessApiArgs,
  IAccountUpdateDisableApiArgs,
  IAccountUpdateEnableApiArgs,
  IAccountUpdatePasswordApiArgs,
  IAccountUpdateResetPasswordApiArgs,
  IAccountUpdateRoleApiArgs,
  IAccountUpdateStatusApiArgs,
  IAccountUpdateUsernameApiArgs,
} from "../entities";
import { INoDataResponse } from "@/utils/entities";

// ----------------------------------------------------------------------

export class AccountApi {
  static getAll = async (args: IAccountGetAllApiArgs) => {
    const result = await axiosInstance.get<IAccountGetAllResponse>(
      endpoints.account.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: IAccountGetDetailsApiArgs) => {
    const result = await axiosInstance.get<IAccountGetDetailsResponse>(
      endpoints.account.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: IAccountCreateApiArgs) => {
    const result = await axiosInstance.post<IAccountGetDetailsResponse>(
      endpoints.account.create,
      args.payload
    );

    return result.data;
  };

  static updatePassword = async (args: IAccountUpdatePasswordApiArgs) => {
    const result = await axiosInstance.patch<INoDataResponse>(
      endpoints.account.updatePassword(args.id),
      args.payload
    );

    return result.data;
  };

  static updateResetPassword = async (
    args: IAccountUpdateResetPasswordApiArgs
  ) => {
    const result = await axiosInstance.patch<INoDataResponse>(
      endpoints.account.updateResetPassword(args.id),
      args.payload
    );

    return result.data;
  };

  static updateUsername = async (args: IAccountUpdateUsernameApiArgs) => {
    const result = await axiosInstance.patch<INoDataResponse>(
      endpoints.account.updateUsername(args.id),
      args.payload
    );

    return result.data;
  };

  static updateStatus = async (args: IAccountUpdateStatusApiArgs) => {
    const result = await axiosInstance.patch<INoDataResponse>(
      endpoints.account.updateStatus(args.id),
      args.payload
    );

    return result.data;
  };

  static updateEnable = async (args: IAccountUpdateEnableApiArgs) => {
    const result = await axiosInstance.patch<INoDataResponse>(
      endpoints.account.updateEnable(args.id),
      args.payload
    );

    return result.data;
  };

  static updateDisable = async (args: IAccountUpdateDisableApiArgs) => {
    const result = await axiosInstance.patch<INoDataResponse>(
      endpoints.account.updateDisable(args.id),
      args.payload
    );

    return result.data;
  };

  static updateRole = async (args: IAccountUpdateRoleApiArgs) => {
    const result = await axiosInstance.patch<IAccountGetDetailsResponse>(
      endpoints.account.updateRole(args.id),
      args.payload
    );

    return result.data;
  };

  static updateAccess = async (args: IAccountUpdateAccessApiArgs) => {
    const result = await axiosInstance.patch<IAccountGetDetailsResponse>(
      endpoints.account.updateAccess(args.id),
      args.payload
    );

    return result.data;
  };

  static delete = async (args: IAccountDeleteApiArgs) => {
    const result = await axiosInstance.delete<IAccountGetDetailsResponse>(
      endpoints.account.delete(args.id)
    );

    return result.data;
  };
}
