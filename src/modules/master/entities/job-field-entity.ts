import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { IJobFieldCreateSchema, IJobFieldUpdateSchema } from "../schemes";

import { IFileEntity } from "@/modules/core";

// ----------------------------------------------------------------------

export type IJobFieldEntity = {
  id: number;
  name: string;
  picture?: IFileEntity;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type IJobFieldGetAllResponse = IPaginationResponse<IJobFieldEntity>;

export type IJobFieldGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type IJobFieldGetDetailsResponse = IDataResponse<IJobFieldEntity>;

export type IJobFieldGetDetailsParams = {};

// ----------------------------------------------------------------------

export type IJobFieldGetAllApiArgs = IApiGet<IJobFieldGetAllParams>;

export type IJobFieldGetDetailsApiArgs = IApiGet<IJobFieldGetDetailsParams> & {
  id: IJobFieldEntity["id"];
};

export type IJobFieldCreateApiArgs = IApiPost<IJobFieldCreateSchema>;

export type IJobFieldUpdateApiArgs = IApiPut<IJobFieldUpdateSchema, IJobFieldEntity["id"]>;

export type IJobFieldDeleteApiArgs = IApiDelete<IJobFieldEntity["id"]>;
