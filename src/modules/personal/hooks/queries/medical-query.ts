import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  IMedicalCreateApiArgs,
  IMedicalCreateMultipleApiArgs,
  IMedicalDeleteApiArgs,
  IMedicalGetDetailsApiArgs,
  IMedicalGetDetailsResponse,
  IMedicalGetAllApiArgs,
  IMedicalUpdateApiArgs,
  IMedicalUpdateMultipleApiArgs,
  IMedicalGetAllResponse,
} from "../../entities";
import { MedicalApi } from "../../apis";

// ----------------------------------------------------------------------

export class MedicalQuery {
  static useGetAll = (
    args: IHookQueryGet<IMedicalGetAllApiArgs, IMedicalGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["MedicalQuery-getAll", args.props],
      queryFn: () => MedicalApi.getAll(args.props),
      ...args.options,
    });
  };

  static useGetAllCustom = (
    args: IHookQueryGet<IMedicalGetAllApiArgs, IMedicalGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["MedicalQuery-getAllCustom", args.props],
      queryFn: () => MedicalApi.getAllCustom(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<IMedicalGetAllApiArgs, IMedicalGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["MedicalQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        MedicalApi.getAll({
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
    args: IHookQueryGet<IMedicalGetDetailsApiArgs, IMedicalGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["MedicalQuery-getDetails", args.props],
      queryFn: () => MedicalApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<IMedicalCreateApiArgs, IMedicalGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["MedicalQuery-create"],
      mutationFn: MedicalApi.create,
      ...args.options,
    });
  };

  static useCreateMultiple = (
    args: IHookQueryMutation<IMedicalCreateMultipleApiArgs, IMedicalGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["MedicalQuery-create-multiple"],
      mutationFn: MedicalApi.createMultiple,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<IMedicalUpdateApiArgs, IMedicalGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["MedicalQuery-update"],
      mutationFn: MedicalApi.update,
      ...args.options,
    });
  };

  static useUpdateMultiple = (
    args: IHookQueryMutation<IMedicalUpdateMultipleApiArgs, IMedicalGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["MedicalQuery-update-multiple"],
      mutationFn: MedicalApi.updateMultiple,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<IMedicalDeleteApiArgs, IMedicalGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["MedicalQuery-delete"],
      mutationFn: MedicalApi.delete,
      ...args.options,
    });
  };
}
