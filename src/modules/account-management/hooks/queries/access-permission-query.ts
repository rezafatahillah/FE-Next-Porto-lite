import { useQuery } from "@tanstack/react-query";

import { IHookQueryGet } from "@/utils/entities";

import {
  IAccessPermissionGetAllApiArgs,
  IAccessPermissionGetAllResponse,
  IAccessPermissionGetByRoleApiArgs,
} from "../../entities";
import { AccessPermissionApi } from "../../apis";

// ----------------------------------------------------------------------

export class AccessPermissionQuery {
  static useGetAll = (
    args: IHookQueryGet<
      IAccessPermissionGetAllApiArgs,
      IAccessPermissionGetAllResponse
    >
  ) => {
    return useQuery({
      queryKey: ["access-permission-getAll", args.props],
      queryFn: () => AccessPermissionApi.getAll(args.props),
      ...args.options,
    });
  };

  static useGetByRole = (
    args: IHookQueryGet<
      IAccessPermissionGetByRoleApiArgs,
      IAccessPermissionGetAllResponse
    >
  ) => {
    return useQuery({
      queryKey: ["access-permission-getByRole", args.props],
      queryFn: () => AccessPermissionApi.getByRole(args.props),
      ...args.options,
    });
  };
}
