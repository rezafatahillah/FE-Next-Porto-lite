import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  IJobTypeCreateApiArgs,
  IJobTypeDeleteApiArgs,
  IJobTypeGetDetailsApiArgs,
  IJobTypeGetDetailsResponse,
  IJobTypeGetAllApiArgs,
  IJobTypeUpdateApiArgs,
  IJobTypeGetAllResponse,
} from "../../entities";
import { JobTypeApi } from "../../apis";

// ----------------------------------------------------------------------

export class JobTypeQuery {
  static useGetAll = (
    args: IHookQueryGet<IJobTypeGetAllApiArgs, IJobTypeGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["JobTypeQuery-getAll", args.props],
      queryFn: () => JobTypeApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<IJobTypeGetAllApiArgs, IJobTypeGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["JobTypeQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        JobTypeApi.getAll({
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
    args: IHookQueryGet<IJobTypeGetDetailsApiArgs, IJobTypeGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["JobTypeQuery-getDetails", args.props],
      queryFn: () => JobTypeApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<IJobTypeCreateApiArgs, IJobTypeGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["JobTypeQuery-create"],
      mutationFn: JobTypeApi.create,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<IJobTypeUpdateApiArgs, IJobTypeGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["JobTypeQuery-update"],
      mutationFn: JobTypeApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<IJobTypeDeleteApiArgs, IJobTypeGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["JobTypeQuery-delete"],
      mutationFn: JobTypeApi.delete,
      ...args.options,
    });
  };
}
