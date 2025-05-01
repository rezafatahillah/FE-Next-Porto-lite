import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  ISkillLevelCreateApiArgs,
  ISkillLevelDeleteApiArgs,
  ISkillLevelGetDetailsApiArgs,
  ISkillLevelGetDetailsResponse,
  ISkillLevelGetAllApiArgs,
  ISkillLevelUpdateApiArgs,
  ISkillLevelGetAllResponse,
} from "../../entities";
import { SkillLevelApi } from "../../apis";

// ----------------------------------------------------------------------

export class SkillLevelQuery {
  static useGetAll = (
    args: IHookQueryGet<ISkillLevelGetAllApiArgs, ISkillLevelGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["SkillLevelQuery-getAll", args.props],
      queryFn: () => SkillLevelApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<ISkillLevelGetAllApiArgs, ISkillLevelGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["SkillLevelQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        SkillLevelApi.getAll({
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
    args: IHookQueryGet<ISkillLevelGetDetailsApiArgs, ISkillLevelGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["SkillLevelQuery-getDetails", args.props],
      queryFn: () => SkillLevelApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<ISkillLevelCreateApiArgs, ISkillLevelGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["SkillLevelQuery-create"],
      mutationFn: SkillLevelApi.create,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<ISkillLevelUpdateApiArgs, ISkillLevelGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["SkillLevelQuery-update"],
      mutationFn: SkillLevelApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<ISkillLevelDeleteApiArgs, ISkillLevelGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["SkillLevelQuery-delete"],
      mutationFn: SkillLevelApi.delete,
      ...args.options,
    });
  };
}
