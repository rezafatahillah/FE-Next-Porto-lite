import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  ICandidateGetDetailsApiArgs,
  ICandidateGetDetailsResponse,
  ICandidateGetAllApiArgs,
  ICandidateProfileUpdateApiArgs,
  ICandidateIdentityUpdateApiArgs,
  ICandidateOtherUpdateApiArgs,
  ICandidateGetAllResponse,
} from "../../entities";
import { CandidateApi } from "../../apis";

// ----------------------------------------------------------------------

export class CandidateQuery {
  static useGetAll = (
    args: IHookQueryGet<ICandidateGetAllApiArgs, ICandidateGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["CandidateQuery-getAll", args.props],
      queryFn: () => CandidateApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<ICandidateGetAllApiArgs, ICandidateGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["CandidateQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        CandidateApi.getAll({
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
    args: IHookQueryGet<ICandidateGetDetailsApiArgs, ICandidateGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["CandidateQuery-getDetails", args.props],
      queryFn: () => CandidateApi.getDetails(args.props),
      ...args.options,
    });
  };

  // static useCreate = (
  //   args: IHookQueryMutation<ICandidateCreateApiArgs, ICandidateGetDetailsResponse>
  // ) => {
  //   return useMutation({
  //     mutationKey: ["CandidateQuery-create"],
  //     mutationFn: CandidateApi.create,
  //     ...args.options,
  //   });
  // };

  static useUpdateProfile = (
    args: IHookQueryMutation<ICandidateProfileUpdateApiArgs, ICandidateGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["CandidateQuery-update"],
      mutationFn: CandidateApi.updateProfile,
      ...args.options,
    });
  };

  static useUpdateIdentity = (
    args: IHookQueryMutation<ICandidateIdentityUpdateApiArgs, ICandidateGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["CandidateQuery-update"],
      mutationFn: CandidateApi.updateIdentity,
      ...args.options,
    });
  };

  static useUpdateOther = (
    args: IHookQueryMutation<ICandidateOtherUpdateApiArgs, ICandidateGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["CandidateQuery-update"],
      mutationFn: CandidateApi.updateOther,
      ...args.options,
    });
  };

  // static useDelete = (
  //   args: IHookQueryMutation<ICandidateDeleteApiArgs, ICandidateGetDetailsResponse>
  // ) => {
  //   return useMutation({
  //     mutationKey: ["CandidateQuery-delete"],
  //     mutationFn: CandidateApi.delete,
  //     ...args.options,
  //   });
  // };
}
