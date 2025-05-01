import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  IFamilyCreateApiArgs,
  IFamilyCreateMultipleApiArgs,
  IFamilyDeleteApiArgs,
  IFamilyGetDetailsApiArgs,
  IFamilyGetDetailsResponse,
  IFamilyGetAllApiArgs,
  IFamilyUpdateApiArgs,
  IFamilyUpdateMultipleApiArgs,
  IFamilyGetAllResponse,
} from "../../entities";
import { FamilyApi } from "../../apis";

// ----------------------------------------------------------------------

export class FamilyQuery {
  static useGetAll = (
    args: IHookQueryGet<IFamilyGetAllApiArgs, IFamilyGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["FamilyQuery-getAll", args.props],
      queryFn: () => FamilyApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<IFamilyGetAllApiArgs, IFamilyGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["FamilyQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        FamilyApi.getAll({
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
    args: IHookQueryGet<IFamilyGetDetailsApiArgs, IFamilyGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["FamilyQuery-getDetails", args.props],
      queryFn: () => FamilyApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<IFamilyCreateApiArgs, IFamilyGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["FamilyQuery-create"],
      mutationFn: FamilyApi.create,
      ...args.options,
    });
  };

  static useCreateMultiple = (
    args: IHookQueryMutation<IFamilyCreateMultipleApiArgs, IFamilyGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["FamilyQuery-create-multiple"],
      mutationFn: FamilyApi.createMultiple,
      ...args.options,
    });
  };

  static useUpdateMultiple = (
    args: IHookQueryMutation<IFamilyUpdateMultipleApiArgs, IFamilyGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["FamilyQuery-update-multiple"],
      mutationFn: FamilyApi.updateMultiple,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<IFamilyUpdateApiArgs, IFamilyGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["FamilyQuery-update"],
      mutationFn: FamilyApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<IFamilyDeleteApiArgs, IFamilyGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["FamilyQuery-delete"],
      mutationFn: FamilyApi.delete,
      ...args.options,
    });
  };
}
