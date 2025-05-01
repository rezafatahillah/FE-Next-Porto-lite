import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryInfinite,
} from "@/utils/entities";

import {
  ICodeGetAllApiArgs,
  ICodeGetAllResponse,
} from "../../entities";
import { CodeApi } from "../../apis";

// ----------------------------------------------------------------------

export class CodeQuery {
  static useGetAll = (
    args: IHookQueryGet<ICodeGetAllApiArgs, ICodeGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["CodeQuery-getAll", args.props],
      queryFn: () => CodeApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<ICodeGetAllApiArgs, ICodeGetAllResponse>
  ) => {
    return useInfiniteQuery({
      queryKey: ["CodeQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        CodeApi.getAll({
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

  static useGetAccountStatus = (
    args: IHookQueryGet<ICodeGetAllApiArgs, ICodeGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["CodeQuery-getAccountStatus", args.props],
      queryFn: () => CodeApi.getByType("account-status", args.props),
      ...args.options,
    });
  };

  static useGetUserType = (
    args: IHookQueryGet<ICodeGetAllApiArgs, ICodeGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["CodeQuery-getUserType", args.props],
      queryFn: () => CodeApi.getByType("user-type", args.props),
      ...args.options,
    });
  };

  static useGetEducationType = (
    args: IHookQueryGet<ICodeGetAllApiArgs, ICodeGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["CodeQuery-getEducationType", args.props],
      queryFn: () => CodeApi.getByType("education-type", args.props),
      ...args.options,
    });
  };

  static useGetFamilyType = (
    args: IHookQueryGet<ICodeGetAllApiArgs, ICodeGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["CodeQuery-getFamilyType", args.props],
      queryFn: () => CodeApi.getByType("family-type", args.props),
      ...args.options,
    });
  };

  static useGetMaritalType = (
    args: IHookQueryGet<ICodeGetAllApiArgs, ICodeGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["CodeQuery-getMaritalType", args.props],
      queryFn: () => CodeApi.getByType("marital-type", args.props),
      ...args.options,
    });
  };

  static useGetGenderType = (
    args: IHookQueryGet<ICodeGetAllApiArgs, ICodeGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["CodeQuery-getGenderType", args.props],
      queryFn: () => CodeApi.getByType("gender-type", args.props),
      ...args.options,
    });
  };

  static useGetReligionType = (
    args: IHookQueryGet<ICodeGetAllApiArgs, ICodeGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["CodeQuery-getReligionType", args.props],
      queryFn: () => CodeApi.getByType("religion-type", args.props),
      ...args.options,
    });
  };

  static useGetLevelType = (
    args: IHookQueryGet<ICodeGetAllApiArgs, ICodeGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["CodeQuery-getLevelType", args.props],
      queryFn: () => CodeApi.getByType("level-type", args.props),
      ...args.options,
    });
  };

  static useGetEducationStatus = (
    args: IHookQueryGet<ICodeGetAllApiArgs, ICodeGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["CodeQuery-getEducationStatus", args.props],
      queryFn: () => CodeApi.getByType("education-status", args.props),
      ...args.options,
    });
  };

  static useGetOptionType = (
    args: IHookQueryGet<ICodeGetAllApiArgs, ICodeGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["CodeQuery-getOptionType", args.props],
      queryFn: () => CodeApi.getByType("option-type", args.props),
      ...args.options,
    });
  };

  static useGetDocType = (
    args: IHookQueryGet<ICodeGetAllApiArgs, ICodeGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["CodeQuery-getDocType", args.props],
      queryFn: () => CodeApi.getByType("doc-type", args.props),
      ...args.options,
    });
  };
  
}
