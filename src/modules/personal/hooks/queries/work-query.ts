import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  IWorkCreateApiArgs,
  IWorkDeleteApiArgs,
  IWorkGetDetailsApiArgs,
  IWorkGetDetailsResponse,
  IWorkGetAllApiArgs,
  IWorkUpdateApiArgs,
  IWorkGetAllResponse,
} from "../../entities";
import { WorkApi } from "../../apis";

// ----------------------------------------------------------------------

export class WorkQuery {
  static useGetAll = (
    args: IHookQueryGet<IWorkGetAllApiArgs, IWorkGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["WorkQuery-getAll", args.props],
      queryFn: () => WorkApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<IWorkGetAllApiArgs, IWorkGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["WorkQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        WorkApi.getAll({
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
    args: IHookQueryGet<IWorkGetDetailsApiArgs, IWorkGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["WorkQuery-getDetails", args.props],
      queryFn: () => WorkApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<IWorkCreateApiArgs, IWorkGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["WorkQuery-create"],
      mutationFn: WorkApi.create,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<IWorkUpdateApiArgs, IWorkGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["WorkQuery-update"],
      mutationFn: WorkApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<IWorkDeleteApiArgs, IWorkGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["WorkQuery-delete"],
      mutationFn: WorkApi.delete,
      ...args.options,
    });
  };
}
