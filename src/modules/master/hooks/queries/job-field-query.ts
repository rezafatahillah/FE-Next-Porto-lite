import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  IJobFieldCreateApiArgs,
  IJobFieldDeleteApiArgs,
  IJobFieldGetDetailsApiArgs,
  IJobFieldGetDetailsResponse,
  IJobFieldGetAllApiArgs,
  IJobFieldUpdateApiArgs,
  IJobFieldGetAllResponse,
} from "../../entities";
import { JobFieldApi } from "../../apis";

// ----------------------------------------------------------------------

export class JobFieldQuery {
  static useGetAll = (
    args: IHookQueryGet<IJobFieldGetAllApiArgs, IJobFieldGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["JobFieldQuery-getAll", args.props],
      queryFn: () => JobFieldApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<IJobFieldGetAllApiArgs, IJobFieldGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["JobFieldQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        JobFieldApi.getAll({
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
    args: IHookQueryGet<IJobFieldGetDetailsApiArgs, IJobFieldGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["JobFieldQuery-getDetails", args.props],
      queryFn: () => JobFieldApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<IJobFieldCreateApiArgs, IJobFieldGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["JobFieldQuery-create"],
      mutationFn: JobFieldApi.create,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<IJobFieldUpdateApiArgs, IJobFieldGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["JobFieldQuery-update"],
      mutationFn: JobFieldApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<IJobFieldDeleteApiArgs, IJobFieldGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["JobFieldQuery-delete"],
      mutationFn: JobFieldApi.delete,
      ...args.options,
    });
  };
}
