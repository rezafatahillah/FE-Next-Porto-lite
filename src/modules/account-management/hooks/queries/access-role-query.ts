import { useMutation, useQuery } from '@tanstack/react-query';

import { IHookQueryGet, IHookQueryMutation } from '@/utils/entities';

import {
  IAccessRoleCreateApiArgs,
  IAccessRoleDeleteApiArgs,
  IAccessRoleGetDetailsApiArgs,
  IAccessRoleGetDetailsResponse,
  IAccessRoleGetAllApiArgs,
  IAccessRoleUpdateApiArgs,
  IAccessRoleGetAllResponse,
} from '../../entities';
import { AccessRoleApi } from '../../apis';

// ----------------------------------------------------------------------

export class AccessRoleQuery {
  static useGetAll = (args: IHookQueryGet<IAccessRoleGetAllApiArgs, IAccessRoleGetAllResponse>) => {
    return useQuery({
      queryKey: ['AccessRoleQuery-getAll', args.props],
      queryFn: () => AccessRoleApi.getAll(args.props),
      ...args.options,
    });
  };

  static useGetDetails = (
    args: IHookQueryGet<IAccessRoleGetDetailsApiArgs, IAccessRoleGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ['AccessRoleQuery-getDetails', args.props],
      queryFn: () => AccessRoleApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<IAccessRoleCreateApiArgs, IAccessRoleGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ['AccessRoleQuery-create'],
      mutationFn: AccessRoleApi.create,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<IAccessRoleUpdateApiArgs, IAccessRoleGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ['AccessRoleQuery-update'],
      mutationFn: AccessRoleApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<IAccessRoleDeleteApiArgs, IAccessRoleGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ['AccessRoleQuery-delete'],
      mutationFn: AccessRoleApi.delete,
      ...args.options,
    });
  };
}
