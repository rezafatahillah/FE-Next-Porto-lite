import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  IDegreeCreateApiArgs,
  IDegreeDeleteApiArgs,
  IDegreeGetDetailsApiArgs,
  IDegreeGetDetailsResponse,
  IDegreeGetAllApiArgs,
  IDegreeUpdateApiArgs,
  IDegreeGetAllResponse,
} from "../../entities";
import { DegreeApi } from "../../apis";

// ----------------------------------------------------------------------

export class DegreeQuery {
  static useGetAll = (
    args: IHookQueryGet<IDegreeGetAllApiArgs, IDegreeGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["DegreeQuery-getAll", args.props],
      queryFn: () => DegreeApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<IDegreeGetAllApiArgs, IDegreeGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["DegreeQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        DegreeApi.getAll({
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
    args: IHookQueryGet<IDegreeGetDetailsApiArgs, IDegreeGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["DegreeQuery-getDetails", args.props],
      queryFn: () => DegreeApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<IDegreeCreateApiArgs, IDegreeGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["DegreeQuery-create"],
      mutationFn: DegreeApi.create,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<IDegreeUpdateApiArgs, IDegreeGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["DegreeQuery-update"],
      mutationFn: DegreeApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<IDegreeDeleteApiArgs, IDegreeGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["DegreeQuery-delete"],
      mutationFn: DegreeApi.delete,
      ...args.options,
    });
  };
}
