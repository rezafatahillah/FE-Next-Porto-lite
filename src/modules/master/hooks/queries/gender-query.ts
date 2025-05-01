import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  IGenderCreateApiArgs,
  IGenderDeleteApiArgs,
  IGenderGetDetailsApiArgs,
  IGenderGetDetailsResponse,
  IGenderGetAllApiArgs,
  IGenderUpdateApiArgs,
  IGenderGetAllResponse,
} from "../../entities";
import { GenderApi } from "../../apis";

// ----------------------------------------------------------------------

export class GenderQuery {
  static useGetAll = (
    args: IHookQueryGet<IGenderGetAllApiArgs, IGenderGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["GenderQuery-getAll", args.props],
      queryFn: () => GenderApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<IGenderGetAllApiArgs, IGenderGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["GenderQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        GenderApi.getAll({
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
    args: IHookQueryGet<IGenderGetDetailsApiArgs, IGenderGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["GenderQuery-getDetails", args.props],
      queryFn: () => GenderApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<IGenderCreateApiArgs, IGenderGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["GenderQuery-create"],
      mutationFn: GenderApi.create,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<IGenderUpdateApiArgs, IGenderGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["GenderQuery-update"],
      mutationFn: GenderApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<IGenderDeleteApiArgs, IGenderGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["GenderQuery-delete"],
      mutationFn: GenderApi.delete,
      ...args.options,
    });
  };
}
