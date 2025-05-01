import { useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryMutation,
  INoDataResponse,
  IUnprocessableResponse,
} from "@/utils/entities";

import {
  IAccountCreateApiArgs,
  IAccountDeleteApiArgs,
  IAccountGetDetailsApiArgs,
  IAccountGetDetailsResponse,
  IAccountGetAllApiArgs,
  IAccountGetAllResponse,
  IAccountUpdateUsernameApiArgs,
  IAccountUpdateRoleApiArgs,
  IAccountUpdateAccessApiArgs,
  IAccountUpdateResetPasswordApiArgs,
  IAccountUpdateStatusApiArgs,
  IAccountUpdateEnableApiArgs,
  IAccountUpdateDisableApiArgs,
  IAccountUpdatePasswordApiArgs,
} from "../../entities";
import { AccountApi } from "../../apis";

// ----------------------------------------------------------------------

export class AccountQuery {
  static useGetAll = (
    args: IHookQueryGet<IAccountGetAllApiArgs, IAccountGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["AccountQuery-getAll", args.props],
      queryFn: () => AccountApi.getAll(args.props),
      ...args.options,
    });
  };

  static useGetDetails = (
    args: IHookQueryGet<IAccountGetDetailsApiArgs, IAccountGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["AccountQuery-getDetails", args.props],
      queryFn: () => AccountApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<IAccountCreateApiArgs, IAccountGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["AccountQuery-create"],
      mutationFn: AccountApi.create,
      ...args.options,
    });
  };

  static useUpdatePassword = (
    args: IHookQueryMutation<IAccountUpdatePasswordApiArgs, INoDataResponse>
  ) => {
    return useMutation({
      mutationKey: ["AccountQuery-updatePassword"],
      mutationFn: AccountApi.updatePassword,
      ...args.options,
    });
  };

  static useUpdateResetPassword = (
    args: IHookQueryMutation<
      IAccountUpdateResetPasswordApiArgs,
      INoDataResponse,
      IUnprocessableResponse
    >
  ) => {
    return useMutation({
      mutationKey: ["AccountQuery-updateResetPassword"],
      mutationFn: AccountApi.updateResetPassword,
      ...args.options,
    });
  };

  static useUpdateUsername = (
    args: IHookQueryMutation<IAccountUpdateUsernameApiArgs, INoDataResponse>
  ) => {
    return useMutation({
      mutationKey: ["AccountQuery-updateUsername"],
      mutationFn: AccountApi.updateUsername,
      ...args.options,
    });
  };

  static useUpdateStatus = (
    args: IHookQueryMutation<IAccountUpdateStatusApiArgs, INoDataResponse>
  ) => {
    return useMutation({
      mutationKey: ["AccountQuery-updateStatus"],
      mutationFn: AccountApi.updateStatus,
      ...args.options,
    });
  };

  static useUpdateEnable = (
    args: IHookQueryMutation<IAccountUpdateEnableApiArgs, INoDataResponse>
  ) => {
    return useMutation({
      mutationKey: ["AccountQuery-updateEnable"],
      mutationFn: AccountApi.updateEnable,
      ...args.options,
    });
  };

  static useUpdateDisable = (
    args: IHookQueryMutation<IAccountUpdateDisableApiArgs, INoDataResponse>
  ) => {
    return useMutation({
      mutationKey: ["AccountQuery-updateDisable"],
      mutationFn: AccountApi.updateDisable,
      ...args.options,
    });
  };

  static useUpdateRole = (
    args: IHookQueryMutation<
      IAccountUpdateRoleApiArgs,
      IAccountGetDetailsResponse
    >
  ) => {
    return useMutation({
      mutationKey: ["AccountQuery-updateRole"],
      mutationFn: AccountApi.updateRole,
      ...args.options,
    });
  };

  static useUpdateAccess = (
    args: IHookQueryMutation<
      IAccountUpdateAccessApiArgs,
      IAccountGetDetailsResponse
    >
  ) => {
    return useMutation({
      mutationKey: ["AccountQuery-updateAccess"],
      mutationFn: AccountApi.updateAccess,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<IAccountDeleteApiArgs, IAccountGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["AccountQuery-delete"],
      mutationFn: AccountApi.delete,
      ...args.options,
    });
  };
}
