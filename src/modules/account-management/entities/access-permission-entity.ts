import { IApiGet, IDataResponse } from "@/utils/entities";

import { PermissionModuleEnum, PermissionSlugEnum } from "../enums";
import { IAccessRoleEntity } from "./access-role-entity";

// ----------------------------------------------------------------------

export type IAccessPermissionEntity = {
  id: number;
  module: PermissionModuleEnum;
  action: string;
  slug: PermissionSlugEnum;
  createdAt: string;
  updatedAt: string;
};

export type IAccessPermissionAllEntity = Pick<
  IAccessPermissionEntity,
  "module"
> & {
  permissions: Pick<IAccessPermissionEntity, "id" | "slug" | "action">[];
};

// ----------------------------------------------------------------------

export type IAccessPermissionGetAllResponse = IDataResponse<
  IAccessPermissionAllEntity[]
>;

export type IAccessPermissionGetAllParams = {};

// ----------------------------------------------------------------------

export type IAccessPermissionGetAllApiArgs =
  IApiGet<IAccessPermissionGetAllParams>;

export type IAccessPermissionGetByRoleApiArgs =
  IApiGet<IAccessPermissionGetAllParams> & {
    id: IAccessRoleEntity["id"];
  };
