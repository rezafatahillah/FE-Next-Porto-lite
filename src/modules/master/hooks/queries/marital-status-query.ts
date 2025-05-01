import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  IMaritalStatusCreateApiArgs,
  IMaritalStatusDeleteApiArgs,
  IMaritalStatusGetDetailsApiArgs,
  IMaritalStatusGetDetailsResponse,
  IMaritalStatusGetAllApiArgs,
  IMaritalStatusUpdateApiArgs,
  IMaritalStatusGetAllResponse,
} from "../../entities";
import { MaritalStatusApi } from "../../apis";

// ----------------------------------------------------------------------

export class MaritalStatusQuery {
  static useGetAll = (
    args: IHookQueryGet<IMaritalStatusGetAllApiArgs, IMaritalStatusGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["MaritalStatusQuery-getAll", args.props],
      queryFn: () => MaritalStatusApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<IMaritalStatusGetAllApiArgs, IMaritalStatusGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["MaritalStatusQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        MaritalStatusApi.getAll({
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
    args: IHookQueryGet<IMaritalStatusGetDetailsApiArgs, IMaritalStatusGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["MaritalStatusQuery-getDetails", args.props],
      queryFn: () => MaritalStatusApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<IMaritalStatusCreateApiArgs, IMaritalStatusGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["MaritalStatusQuery-create"],
      mutationFn: MaritalStatusApi.create,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<IMaritalStatusUpdateApiArgs, IMaritalStatusGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["MaritalStatusQuery-update"],
      mutationFn: MaritalStatusApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<IMaritalStatusDeleteApiArgs, IMaritalStatusGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["MaritalStatusQuery-delete"],
      mutationFn: MaritalStatusApi.delete,
      ...args.options,
    });
  };
}
