import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  IReferenceCreateApiArgs,
  IReferenceDeleteApiArgs,
  IReferenceGetDetailsApiArgs,
  IReferenceGetDetailsResponse,
  IReferenceGetAllApiArgs,
  IReferenceUpdateApiArgs,
  IReferenceGetAllResponse,
} from "../../entities";
import { ReferenceApi } from "../../apis";

// ----------------------------------------------------------------------

export class ReferenceQuery {
  static useGetAll = (
    args: IHookQueryGet<IReferenceGetAllApiArgs, IReferenceGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["ReferenceQuery-getAll", args.props],
      queryFn: () => ReferenceApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<IReferenceGetAllApiArgs, IReferenceGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["ReferenceQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        ReferenceApi.getAll({
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
    args: IHookQueryGet<IReferenceGetDetailsApiArgs, IReferenceGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["ReferenceQuery-getDetails", args.props],
      queryFn: () => ReferenceApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<IReferenceCreateApiArgs, IReferenceGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["ReferenceQuery-create"],
      mutationFn: ReferenceApi.create,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<IReferenceUpdateApiArgs, IReferenceGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["ReferenceQuery-update"],
      mutationFn: ReferenceApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<IReferenceDeleteApiArgs, IReferenceGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["ReferenceQuery-delete"],
      mutationFn: ReferenceApi.delete,
      ...args.options,
    });
  };
}
