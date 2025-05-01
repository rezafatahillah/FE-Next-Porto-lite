import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  IDiseaseCreateApiArgs,
  IDiseaseDeleteApiArgs,
  IDiseaseGetDetailsApiArgs,
  IDiseaseGetDetailsResponse,
  IDiseaseGetAllApiArgs,
  IDiseaseUpdateApiArgs,
  IDiseaseGetAllResponse,
} from "../../entities";
import { DiseaseApi } from "../../apis";

// ----------------------------------------------------------------------

export class DiseaseQuery {
  static useGetAll = (
    args: IHookQueryGet<IDiseaseGetAllApiArgs, IDiseaseGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["DiseaseQuery-getAll", args.props],
      queryFn: () => DiseaseApi.getAll(args.props),
      ...args.options,
    });
  };

  static useGetAllCustom = (
    args: IHookQueryGet<IDiseaseGetAllApiArgs, IDiseaseGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["DiseaseQuery-getAll", args.props],
      queryFn: () => DiseaseApi.getAllCustom(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<IDiseaseGetAllApiArgs, IDiseaseGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["DiseaseQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        DiseaseApi.getAll({
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
    args: IHookQueryGet<IDiseaseGetDetailsApiArgs, IDiseaseGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["DiseaseQuery-getDetails", args.props],
      queryFn: () => DiseaseApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<IDiseaseCreateApiArgs, IDiseaseGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["DiseaseQuery-create"],
      mutationFn: DiseaseApi.create,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<IDiseaseUpdateApiArgs, IDiseaseGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["DiseaseQuery-update"],
      mutationFn: DiseaseApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<IDiseaseDeleteApiArgs, IDiseaseGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["DiseaseQuery-delete"],
      mutationFn: DiseaseApi.delete,
      ...args.options,
    });
  };
}
