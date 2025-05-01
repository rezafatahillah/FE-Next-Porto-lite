import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  IDoctypeCreateApiArgs,
  IDoctypeCreateMultipleApiArgs,
  IDoctypeDeleteApiArgs,
  IDoctypeGetDetailsApiArgs,
  IDoctypeGetDetailsResponse,
  IDoctypeGetAllApiArgs,
  IDoctypeUpdateApiArgs,
  IDoctypeGetAllResponse,
} from "../../entities";
import { DoctypeApi } from "../../apis";

// ----------------------------------------------------------------------

export class DoctypeQuery {
  static useGetAll = (
    args: IHookQueryGet<IDoctypeGetAllApiArgs, IDoctypeGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["DoctypeQuery-getAll", args.props],
      queryFn: () => DoctypeApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<IDoctypeGetAllApiArgs, IDoctypeGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["DoctypeQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        DoctypeApi.getAll({
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
    args: IHookQueryGet<IDoctypeGetDetailsApiArgs, IDoctypeGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["DoctypeQuery-getDetails", args.props],
      queryFn: () => DoctypeApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<IDoctypeCreateApiArgs, IDoctypeGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["DoctypeQuery-create"],
      mutationFn: DoctypeApi.create,
      ...args.options,
    });
  };

  static useCreateMultiple = (
    args: IHookQueryMutation<IDoctypeCreateMultipleApiArgs, IDoctypeGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["DoctypeQuery-create-multiple"],
      mutationFn: DoctypeApi.createMultiple,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<IDoctypeUpdateApiArgs, IDoctypeGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["DoctypeQuery-update"],
      mutationFn: DoctypeApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<IDoctypeDeleteApiArgs, IDoctypeGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["DoctypeQuery-delete"],
      mutationFn: DoctypeApi.delete,
      ...args.options,
    });
  };
}
