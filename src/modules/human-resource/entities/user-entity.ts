import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { IUserCreateSchema, IUserUpdateSchema } from "../schemes";

import { IFileEntity } from "@/modules/core";

// ----------------------------------------------------------------------

export type IUserEntity = {
  id: string;
  type: string;
  name: string;
  email: string;
  picture?: IFileEntity;
  emailVerifiedAt: string;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type IUserGetAllResponse = IPaginationResponse<IUserEntity>;

export type IUserGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type IUserGetDetailsResponse = IDataResponse<IUserEntity>;

export type IUserGetDetailsParams = {};

// ----------------------------------------------------------------------

export type IUserGetAllApiArgs = IApiGet<IUserGetAllParams>;

export type IUserGetDetailsApiArgs = IApiGet<IUserGetDetailsParams> & {
  id: IUserEntity["id"];
};

export type IUserCreateApiArgs = IApiPost<IUserCreateSchema>;

export type IUserUpdateApiArgs = IApiPut<IUserUpdateSchema, IUserEntity["id"]>;

export type IUserDeleteApiArgs = IApiDelete<IUserEntity["id"]>;
