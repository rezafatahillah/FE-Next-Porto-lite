import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  ILanguageCreateApiArgs,
  ILanguageDeleteApiArgs,
  ILanguageGetDetailsApiArgs,
  ILanguageGetDetailsResponse,
  ILanguageGetAllApiArgs,
  ILanguageUpdateApiArgs,
  ILanguageGetAllResponse,
} from "../../entities";
import { LanguageApi } from "../../apis";

// ----------------------------------------------------------------------

export class LanguageQuery {
  static useGetAll = (
    args: IHookQueryGet<ILanguageGetAllApiArgs, ILanguageGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["LanguageQuery-getAll", args.props],
      queryFn: () => LanguageApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<ILanguageGetAllApiArgs, ILanguageGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["LanguageQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        LanguageApi.getAll({
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
    args: IHookQueryGet<ILanguageGetDetailsApiArgs, ILanguageGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["LanguageQuery-getDetails", args.props],
      queryFn: () => LanguageApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<ILanguageCreateApiArgs, ILanguageGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["LanguageQuery-create"],
      mutationFn: LanguageApi.create,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<ILanguageUpdateApiArgs, ILanguageGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["LanguageQuery-update"],
      mutationFn: LanguageApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<ILanguageDeleteApiArgs, ILanguageGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["LanguageQuery-delete"],
      mutationFn: LanguageApi.delete,
      ...args.options,
    });
  };
}
