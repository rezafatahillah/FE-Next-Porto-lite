import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  ISkillCommonCreateApiArgs,
  ISkillCommonDeleteApiArgs,
  ISkillCommonGetDetailsApiArgs,
  ISkillCommonGetDetailsResponse,
  ISkillCommonGetAllApiArgs,
  ISkillCommonUpdateApiArgs,
  ISkillCommonGetAllResponse,
} from "../../entities";
import { SkillCommonApi } from "../../apis";

// ----------------------------------------------------------------------

export class SkillCommonQuery {
  static useGetAll = (
    args: IHookQueryGet<ISkillCommonGetAllApiArgs, ISkillCommonGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["SkillCommonQuery-getAll", args.props],
      queryFn: () => SkillCommonApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<ISkillCommonGetAllApiArgs, ISkillCommonGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["SkillCommonQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        SkillCommonApi.getAll({
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
    args: IHookQueryGet<ISkillCommonGetDetailsApiArgs, ISkillCommonGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["SkillCommonQuery-getDetails", args.props],
      queryFn: () => SkillCommonApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<ISkillCommonCreateApiArgs, ISkillCommonGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["SkillCommonQuery-create"],
      mutationFn: SkillCommonApi.create,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<ISkillCommonUpdateApiArgs, ISkillCommonGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["SkillCommonQuery-update"],
      mutationFn: SkillCommonApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<ISkillCommonDeleteApiArgs, ISkillCommonGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["SkillCommonQuery-delete"],
      mutationFn: SkillCommonApi.delete,
      ...args.options,
    });
  };
}
