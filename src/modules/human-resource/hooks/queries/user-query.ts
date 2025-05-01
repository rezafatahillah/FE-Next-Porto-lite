import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  IUserCreateApiArgs,
  IUserDeleteApiArgs,
  IUserGetDetailsApiArgs,
  IUserGetDetailsResponse,
  IUserGetAllApiArgs,
  IUserUpdateApiArgs,
  IUserGetAllResponse,
} from "../../entities";
import { UserApi } from "../../apis";

// ----------------------------------------------------------------------

export class UserQuery {
  static useGetAll = (
    args: IHookQueryGet<IUserGetAllApiArgs, IUserGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["UserQuery-getAll", args.props],
      queryFn: () => UserApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<IUserGetAllApiArgs, IUserGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["UserQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        UserApi.getAll({
          ...args.props,
          params: {
            ...args.props?.params,
            page: pageParam,
          },
        }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.meta.nextPage,
      ...args.options,
    });
  };

  static useGetDetails = (
    args: IHookQueryGet<IUserGetDetailsApiArgs, IUserGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["UserQuery-getDetails", args.props],
      queryFn: () => UserApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<IUserCreateApiArgs, IUserGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["UserQuery-create"],
      mutationFn: UserApi.create,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<IUserUpdateApiArgs, IUserGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["UserQuery-update"],
      mutationFn: UserApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<IUserDeleteApiArgs, IUserGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["UserQuery-delete"],
      mutationFn: UserApi.delete,
      ...args.options,
    });
  };
}
