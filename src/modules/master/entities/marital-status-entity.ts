import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { IMaritalStatusCreateSchema, IMaritalStatusUpdateSchema } from "../schemes";

import { IFileEntity } from "@/modules/core";

// ----------------------------------------------------------------------

export type IMaritalStatusEntity = {
  id: number;
  name: string;
  picture?: IFileEntity;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type IMaritalStatusGetAllResponse = IPaginationResponse<IMaritalStatusEntity>;

export type IMaritalStatusGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type IMaritalStatusGetDetailsResponse = IDataResponse<IMaritalStatusEntity>;

export type IMaritalStatusGetDetailsParams = {};

// ----------------------------------------------------------------------

export type IMaritalStatusGetAllApiArgs = IApiGet<IMaritalStatusGetAllParams>;

export type IMaritalStatusGetDetailsApiArgs = IApiGet<IMaritalStatusGetDetailsParams> & {
  id: IMaritalStatusEntity["id"];
};

export type IMaritalStatusCreateApiArgs = IApiPost<IMaritalStatusCreateSchema>;

export type IMaritalStatusUpdateApiArgs = IApiPut<IMaritalStatusUpdateSchema, IMaritalStatusEntity["id"]>;

export type IMaritalStatusDeleteApiArgs = IApiDelete<IMaritalStatusEntity["id"]>;
