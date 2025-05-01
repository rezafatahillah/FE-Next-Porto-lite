import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  IReligionCreateApiArgs,
  IReligionDeleteApiArgs,
  IReligionGetDetailsApiArgs,
  IReligionGetDetailsResponse,
  IReligionGetAllApiArgs,
  IReligionUpdateApiArgs,
  IReligionGetAllResponse,
} from "../../entities";
import { ReligionApi } from "../../apis";

// ----------------------------------------------------------------------

export class ReligionQuery {
  static useGetAll = (
    args: IHookQueryGet<IReligionGetAllApiArgs, IReligionGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["ReligionQuery-getAll", args.props],
      queryFn: () => ReligionApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<IReligionGetAllApiArgs, IReligionGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["ReligionQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        ReligionApi.getAll({
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
    args: IHookQueryGet<IReligionGetDetailsApiArgs, IReligionGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["ReligionQuery-getDetails", args.props],
      queryFn: () => ReligionApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<IReligionCreateApiArgs, IReligionGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["ReligionQuery-create"],
      mutationFn: ReligionApi.create,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<IReligionUpdateApiArgs, IReligionGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["ReligionQuery-update"],
      mutationFn: ReligionApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<IReligionDeleteApiArgs, IReligionGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["ReligionQuery-delete"],
      mutationFn: ReligionApi.delete,
      ...args.options,
    });
  };
}
