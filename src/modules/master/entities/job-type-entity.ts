import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { IJobTypeCreateSchema, IJobTypeUpdateSchema } from "../schemes";

import { IFileEntity } from "@/modules/core";

// ----------------------------------------------------------------------

export type IJobTypeEntity = {
  id: number;
  name: string;
  picture?: IFileEntity;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type IJobTypeGetAllResponse = IPaginationResponse<IJobTypeEntity>;

export type IJobTypeGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type IJobTypeGetDetailsResponse = IDataResponse<IJobTypeEntity>;

export type IJobTypeGetDetailsParams = {};

// ----------------------------------------------------------------------

export type IJobTypeGetAllApiArgs = IApiGet<IJobTypeGetAllParams>;

export type IJobTypeGetDetailsApiArgs = IApiGet<IJobTypeGetDetailsParams> & {
  id: IJobTypeEntity["id"];
};

export type IJobTypeCreateApiArgs = IApiPost<IJobTypeCreateSchema>;

export type IJobTypeUpdateApiArgs = IApiPut<IJobTypeUpdateSchema, IJobTypeEntity["id"]>;

export type IJobTypeDeleteApiArgs = IApiDelete<IJobTypeEntity["id"]>;
