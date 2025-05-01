import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";

import {
  IAccountCreateSchema,
  IAccountUpdateAccessSchema,
  IAccountUpdateDisableSchema,
  IAccountUpdateEnableSchema,
  IAccountUpdatePasswordSchema,
  IAccountUpdateRoleSchema,
  IAccountUpdateStatusSchema,
  IAccountUpdateUsernameSchema,
} from "../schemes";
import { IAccessRoleEntity } from "./access-role-entity";
import { IUserEntity } from "@/modules/human-resource";
import { AccountStatusCodeEnum } from "@/modules/core";
import { IAccessPermissionEntity } from "./access-permission-entity";

// ----------------------------------------------------------------------

export type IAccountEntity = {
  id: string;
  name: string;
  username: string;
  status: AccountStatusCodeEnum;
  role: Pick<IAccessRoleEntity, "id" | "name">;
  user?: IUserEntity;
  permissions?: IAccessPermissionEntity[];
  disabledAt?: string;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type IAccountGetAllResponse = IPaginationResponse<IAccountEntity>;

export type IAccountGetAllParams = IDefaultParams & {};

export type IAccountGetDetailsResponse = IDataResponse<IAccountEntity>;

export type IAccountGetDetailsParams = {};

// ----------------------------------------------------------------------

export type IAccountGetAllApiArgs = IApiGet<IAccountGetAllParams>;

export type IAccountGetDetailsApiArgs = IApiGet<IAccountGetDetailsParams> & {
  id: IAccountEntity["id"];
};

export type IAccountCreateApiArgs = IApiPost<IAccountCreateSchema>;

export type IAccountUpdateUsernameApiArgs = IApiPut<
  IAccountUpdateUsernameSchema,
  IAccountEntity["id"]
>;

export type IAccountUpdatePasswordApiArgs = IApiPut<
  IAccountUpdatePasswordSchema,
  IAccountEntity["id"]
>;

export type IAccountUpdateResetPasswordApiArgs = IApiPut<
  null,
  IAccountEntity["id"]
>;

export type IAccountUpdateStatusApiArgs = IApiPut<
  IAccountUpdateStatusSchema,
  IAccountEntity["id"]
>;

export type IAccountUpdateEnableApiArgs = IApiPut<
  IAccountUpdateEnableSchema,
  IAccountEntity["id"]
>;

export type IAccountUpdateDisableApiArgs = IApiPut<
  IAccountUpdateDisableSchema,
  IAccountEntity["id"]
>;

export type IAccountUpdateRoleApiArgs = IApiPut<
  IAccountUpdateRoleSchema,
  IAccountEntity["id"]
>;

export type IAccountUpdateAccessApiArgs = IApiPut<
  IAccountUpdateAccessSchema,
  IAccountEntity["id"]
>;

export type IAccountDeleteApiArgs = IApiDelete<IAccountEntity["id"]>;
