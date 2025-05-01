import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IUserCreateApiArgs,
  IUserDeleteApiArgs,
  IUserGetAllApiArgs,
  IUserGetAllResponse,
  IUserGetDetailsApiArgs,
  IUserGetDetailsResponse,
  IUserUpdateApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class UserApi {
  static getAll = async (args: IUserGetAllApiArgs) => {
    const result = await axiosInstance.get<IUserGetAllResponse>(
      endpoints.user.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: IUserGetDetailsApiArgs) => {
    const result = await axiosInstance.get<IUserGetDetailsResponse>(
      endpoints.user.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: IUserCreateApiArgs) => {
    const result = await axiosInstance.post<IUserGetDetailsResponse>(
      endpoints.user.create,
      args.payload
    );

    return result.data;
  };

  static update = async (args: IUserUpdateApiArgs) => {
    const result = await axiosInstance.patch<IUserGetDetailsResponse>(
      endpoints.user.update(args.id),
      args.payload
    );

    return result.data;
  };

  static delete = async (args: IUserDeleteApiArgs) => {
    const result = await axiosInstance.delete<IUserGetDetailsResponse>(
      endpoints.user.delete(args.id)
    );

    return result.data;
  };
}
