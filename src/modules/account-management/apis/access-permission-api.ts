import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IAccessPermissionGetAllApiArgs,
  IAccessPermissionGetAllResponse,
  IAccessPermissionGetByRoleApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class AccessPermissionApi {
  static getAll = async (args: IAccessPermissionGetAllApiArgs) => {
    const result = await axiosInstance.get<IAccessPermissionGetAllResponse>(
      endpoints.access.permission.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getByRole = async (args: IAccessPermissionGetByRoleApiArgs) => {
    const result = await axiosInstance.get<IAccessPermissionGetAllResponse>(
      endpoints.access.permission.getByRole(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };
}
