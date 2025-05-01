import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IAccessRoleCreateApiArgs,
  IAccessRoleDeleteApiArgs,
  IAccessRoleGetAllApiArgs,
  IAccessRoleGetAllResponse,
  IAccessRoleGetDetailsApiArgs,
  IAccessRoleGetDetailsResponse,
  IAccessRoleUpdateApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class AccessRoleApi {
  static getAll = async (args: IAccessRoleGetAllApiArgs) => {
    const result = await axiosInstance.get<IAccessRoleGetAllResponse>(
      endpoints.access.role.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: IAccessRoleGetDetailsApiArgs) => {
    const result = await axiosInstance.get<IAccessRoleGetDetailsResponse>(
      endpoints.access.role.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: IAccessRoleCreateApiArgs) => {
    const result = await axiosInstance.post<IAccessRoleGetDetailsResponse>(
      endpoints.access.role.create,
      args.payload
    );

    return result.data;
  };

  static update = async (args: IAccessRoleUpdateApiArgs) => {
    const result = await axiosInstance.patch<IAccessRoleGetDetailsResponse>(
      endpoints.access.role.update(args.id),
      args.payload
    );

    return result.data;
  };

  static delete = async (args: IAccessRoleDeleteApiArgs) => {
    const result = await axiosInstance.delete<IAccessRoleGetDetailsResponse>(
      endpoints.access.role.delete(args.id)
    );

    return result.data;
  };
}
