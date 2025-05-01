import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { IDegreeCreateSchema, IDegreeUpdateSchema } from "../schemes";

import { IFileEntity } from "@/modules/core";

// ----------------------------------------------------------------------

export type IDegreeEntity = {
  id: number;
  name: string;
  picture?: IFileEntity;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type IDegreeGetAllResponse = IPaginationResponse<IDegreeEntity>;

export type IDegreeGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type IDegreeGetDetailsResponse = IDataResponse<IDegreeEntity>;

export type IDegreeGetDetailsParams = {};

// ----------------------------------------------------------------------

export type IDegreeGetAllApiArgs = IApiGet<IDegreeGetAllParams>;

export type IDegreeGetDetailsApiArgs = IApiGet<IDegreeGetDetailsParams> & {
  id: IDegreeEntity["id"];
};

export type IDegreeCreateApiArgs = IApiPost<IDegreeCreateSchema>;

export type IDegreeUpdateApiArgs = IApiPut<IDegreeUpdateSchema, IDegreeEntity["id"]>;

export type IDegreeDeleteApiArgs = IApiDelete<IDegreeEntity["id"]>;
