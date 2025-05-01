import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
} from "@/utils/entities";

import {
  IMedicalQuestionCreateApiArgs,
  IMedicalQuestionDeleteApiArgs,
  IMedicalQuestionGetDetailsApiArgs,
  IMedicalQuestionGetDetailsResponse,
  IMedicalQuestionGetAllApiArgs,
  IMedicalQuestionUpdateApiArgs,
  IMedicalQuestionGetAllResponse,
} from "../../entities";
import { MedicalQuestionApi } from "../../apis";

// ----------------------------------------------------------------------

export class MedicalQuestionQuery {
  static useGetAll = (
    args: IHookQueryGet<IMedicalQuestionGetAllApiArgs, IMedicalQuestionGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["MedicalQuestionQuery-getAll", args.props],
      queryFn: () => MedicalQuestionApi.getAll(args.props),
      ...args.options,
    });
  };

  static useGetAllCustom = (
    args: IHookQueryGet<IMedicalQuestionGetAllApiArgs, IMedicalQuestionGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["MedicalQuestionQuery-getAll", args.props],
      queryFn: () => MedicalQuestionApi.getAllCustom(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<IMedicalQuestionGetAllApiArgs, IMedicalQuestionGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["MedicalQuestionQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        MedicalQuestionApi.getAll({
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
    args: IHookQueryGet<IMedicalQuestionGetDetailsApiArgs, IMedicalQuestionGetDetailsResponse>
  ) => {
    return useQuery({
      enabled: !!args.props?.id,
      queryKey: ["MedicalQuestionQuery-getDetails", args.props],
      queryFn: () => MedicalQuestionApi.getDetails(args.props),
      ...args.options,
    });
  };

  static useCreate = (
    args: IHookQueryMutation<IMedicalQuestionCreateApiArgs, IMedicalQuestionGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["MedicalQuestionQuery-create"],
      mutationFn: MedicalQuestionApi.create,
      ...args.options,
    });
  };

  static useUpdate = (
    args: IHookQueryMutation<IMedicalQuestionUpdateApiArgs, IMedicalQuestionGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["MedicalQuestionQuery-update"],
      mutationFn: MedicalQuestionApi.update,
      ...args.options,
    });
  };

  static useDelete = (
    args: IHookQueryMutation<IMedicalQuestionDeleteApiArgs, IMedicalQuestionGetDetailsResponse>
  ) => {
    return useMutation({
      mutationKey: ["MedicalQuestionQuery-delete"],
      mutationFn: MedicalQuestionApi.delete,
      ...args.options,
    });
  };
}
