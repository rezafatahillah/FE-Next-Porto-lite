import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  IOrganizationCreateApiArgs,
  IOrganizationDeleteApiArgs,
  IOrganizationGetDetailsApiArgs,
  IOrganizationGetDetailsResponse,
  IOrganizationGetAllApiArgs,
  IOrganizationUpdateApiArgs,
  IOrganizationGetAllResponse,
} from "../../entities";
import { OrganizationApi } from "../../apis";

// ----------------------------------------------------------------------

export class OrganizationQuery {
  static useGetAll = (
    args: IHookQueryGet<IOrganizationGetAllApiArgs, IOrganizationGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["OrganizationQuery-getAll", args.props],
      queryFn: () => OrganizationApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<IOrganizationGetAllApiArgs, IOrganizationGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["OrganizationQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        OrganizationApi.getAll({
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
    args: IHookQueryGet<IOrganizationGetDetailsApiArgs, IOrganizationGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["OrganizationQuery-getDetails", args.props],
      queryFn: () => OrganizationApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<IOrganizationCreateApiArgs, IOrganizationGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["OrganizationQuery-create"],
      mutationFn: OrganizationApi.create,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<IOrganizationUpdateApiArgs, IOrganizationGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["OrganizationQuery-update"],
      mutationFn: OrganizationApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<IOrganizationDeleteApiArgs, IOrganizationGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["OrganizationQuery-delete"],
      mutationFn: OrganizationApi.delete,
      ...args.options,
    });
  };
}
