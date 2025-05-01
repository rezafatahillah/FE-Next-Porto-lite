import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  ISkillCreateApiArgs,
  ISkillDeleteApiArgs,
  ISkillGetDetailsApiArgs,
  ISkillGetDetailsResponse,
  ISkillGetAllApiArgs,
  ISkillUpdateApiArgs,
  ISkillGetAllResponse,
} from "../../entities";
import { SkillApi } from "../../apis";

// ----------------------------------------------------------------------

export class SkillQuery {
  static useGetAll = (
    args: IHookQueryGet<ISkillGetAllApiArgs, ISkillGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["SkillQuery-getAll", args.props],
      queryFn: () => SkillApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<ISkillGetAllApiArgs, ISkillGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["SkillQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        SkillApi.getAll({
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
    args: IHookQueryGet<ISkillGetDetailsApiArgs, ISkillGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["SkillQuery-getDetails", args.props],
      queryFn: () => SkillApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<ISkillCreateApiArgs, ISkillGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["SkillQuery-create"],
      mutationFn: SkillApi.create,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<ISkillUpdateApiArgs, ISkillGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["SkillQuery-update"],
      mutationFn: SkillApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<ISkillDeleteApiArgs, ISkillGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["SkillQuery-delete"],
      mutationFn: SkillApi.delete,
      ...args.options,
    });
  };
}
