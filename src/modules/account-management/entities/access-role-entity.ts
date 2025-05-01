import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
} from "@/utils/entities";

import { IAccessRoleCreateUpdateSchema } from "../schemes";
import { IAccessPermissionEntity } from "./access-permission-entity";

// ----------------------------------------------------------------------

export type IAccessRolesEntity = {
  id: number;
  name: string;
  slug: string;
  visible: boolean;
  createdAt: string;
  updatedAt: string;
};

export type IAccessRoleEntity = {
  id: number;
  name: string;
  slug: string;
  visible: boolean;
  permissions: IAccessPermissionEntity[];
  createdAt: string;
  updatedAt: string;
};

// ----------------------------------------------------------------------

export type IAccessRoleGetAllResponse = IDataResponse<IAccessRolesEntity[]>;

export type IAccessRoleGetAllParams = IDefaultParams & {};

export type IAccessRoleGetDetailsResponse = IDataResponse<IAccessRoleEntity>;

export type IAccessRoleGetDetailsParams = {};

// ----------------------------------------------------------------------

export type IAccessRoleGetAllApiArgs = IApiGet<IAccessRoleGetAllParams>;

export type IAccessRoleGetDetailsApiArgs =
  IApiGet<IAccessRoleGetDetailsParams> & {
    id: IAccessRoleEntity["id"];
  };

export type IAccessRoleCreateApiArgs = IApiPost<IAccessRoleCreateUpdateSchema>;

export type IAccessRoleUpdateApiArgs = IApiPut<
  IAccessRoleCreateUpdateSchema,
  IAccessRoleEntity["id"]
>;

export type IAccessRoleDeleteApiArgs = IApiDelete<IAccessRoleEntity["id"]>;
