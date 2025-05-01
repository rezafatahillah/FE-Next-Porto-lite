import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  ITaxCreateApiArgs,
  ITaxDeleteApiArgs,
  ITaxGetDetailsApiArgs,
  ITaxGetDetailsResponse,
  ITaxGetAllApiArgs,
  ITaxUpdateApiArgs,
  ITaxGetAllResponse,
} from "../../entities";
import { TaxApi } from "../../apis";

// ----------------------------------------------------------------------

export class TaxQuery {
  static useGetAll = (
    args: IHookQueryGet<ITaxGetAllApiArgs, ITaxGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["TaxQuery-getAll", args.props],
      queryFn: () => TaxApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<ITaxGetAllApiArgs, ITaxGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["TaxQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        TaxApi.getAll({
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
    args: IHookQueryGet<ITaxGetDetailsApiArgs, ITaxGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["TaxQuery-getDetails", args.props],
      queryFn: () => TaxApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<ITaxCreateApiArgs, ITaxGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["TaxQuery-create"],
      mutationFn: TaxApi.create,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<ITaxUpdateApiArgs, ITaxGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["TaxQuery-update"],
      mutationFn: TaxApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<ITaxDeleteApiArgs, ITaxGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["TaxQuery-delete"],
      mutationFn: TaxApi.delete,
      ...args.options,
    });
  };
}
