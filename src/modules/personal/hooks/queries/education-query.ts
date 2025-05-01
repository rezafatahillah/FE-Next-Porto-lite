import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  IEducationCreateApiArgs,
  IEducationCreateMultipleApiArgs,
  IEducationDeleteApiArgs,
  IEducationGetDetailsApiArgs,
  IEducationGetDetailsResponse,
  IEducationGetAllApiArgs,
  IEducationUpdateApiArgs,
  IEducationUpdateMultipleApiArgs,
  IEducationGetAllResponse,
} from "../../entities";
import { EducationApi } from "../../apis";

// ----------------------------------------------------------------------

export class EducationQuery {
  static useGetAll = (
    args: IHookQueryGet<IEducationGetAllApiArgs, IEducationGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["EducationQuery-getAll", args.props],
      queryFn: () => EducationApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<IEducationGetAllApiArgs, IEducationGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["EducationQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        EducationApi.getAll({
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
    args: IHookQueryGet<IEducationGetDetailsApiArgs, IEducationGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["EducationQuery-getDetails", args.props],
      queryFn: () => EducationApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<IEducationCreateApiArgs, IEducationGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["EducationQuery-create"],
      mutationFn: EducationApi.create,
      ...args.options,
    });
  };

  static useCreateMultiple = (
      args: IHookQueryMutation<IEducationCreateMultipleApiArgs, IEducationGetDetailsResponse>
    ) => {
      return useMutation({
        mutationKey: ["EducationQuery-create-multiple"],
        mutationFn: EducationApi.createMultiple,
        ...args.options,
      });
    };
  
    static useUpdateMultiple = (
      args: IHookQueryMutation<IEducationUpdateMultipleApiArgs, IEducationGetDetailsResponse>
    ) => {
      return useMutation({
        mutationKey: ["EducationQuery-update-multiple"],
        mutationFn: EducationApi.updateMultiple,
        ...args.options,
      });
    };

  static useUpdate = (
    args: IHookQueryMutation<IEducationUpdateApiArgs, IEducationGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["EducationQuery-update"],
      mutationFn: EducationApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<IEducationDeleteApiArgs, IEducationGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["EducationQuery-delete"],
      mutationFn: EducationApi.delete,
      ...args.options,
    });
  };
}
