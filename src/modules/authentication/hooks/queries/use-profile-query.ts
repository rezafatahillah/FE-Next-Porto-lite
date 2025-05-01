import { useMutation, useQuery } from "@tanstack/react-query";

import {
  IHookQueryGet,
  IHookQueryMutation,
  INoDataResponse,
} from "@/utils/entities";

import {
  IProfileUpdatePasswordApiArgs,
  IProfileGetMySelfParams,
  IProfileGetMySelfResponse,
  IProfileUpdateProfileApiArgs,
} from "../../entities";
import { ProfileApi } from "../../apis";

// ----------------------------------------------------------------------

export class ProfileQuery {
  static useGetMySelf = (
    args: IHookQueryGet<IProfileGetMySelfParams, IProfileGetMySelfResponse>
  ) => {
    return useQuery({
      queryKey: ["ProfileQuery-getMySelf", args.props],
      queryFn: () => ProfileApi.getMySelf(args.props),
      ...args.options,
    });
  };

  static useUpdateProfile = (
    args: IHookQueryMutation<IProfileUpdateProfileApiArgs, INoDataResponse>
  ) => {
    return useMutation({
      mutationKey: ["ProfileQuery-updateProfile"],
      mutationFn: ProfileApi.updateProfile,
      ...args.options,
    });
  };

  static useUpdatePassword = (
    args: IHookQueryMutation<IProfileUpdatePasswordApiArgs, INoDataResponse>
  ) => {
    return useMutation({
      mutationKey: ["ProfileQuery-updatePassword"],
      mutationFn: ProfileApi.updatePassword,
      ...args.options,
    });
  };
}
