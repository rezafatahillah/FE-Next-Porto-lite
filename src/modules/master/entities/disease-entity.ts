import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { IDiseaseCreateSchema, IDiseaseUpdateSchema } from "../schemes";

import { IFileEntity } from "@/modules/core";

// ----------------------------------------------------------------------

export type IDiseaseEntity = {
  id: number;
  name: string;
  picture?: IFileEntity;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type IDiseaseGetAllResponse = IPaginationResponse<IDiseaseEntity>;

export type IDiseaseGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type IDiseaseGetDetailsResponse = IDataResponse<IDiseaseEntity>;

export type IDiseaseGetDetailsParams = {};

// ----------------------------------------------------------------------

export type IDiseaseGetAllApiArgs = IApiGet<IDiseaseGetAllParams>;

export type IDiseaseGetDetailsApiArgs = IApiGet<IDiseaseGetDetailsParams> & {
  id: IDiseaseEntity["id"];
};

export type IDiseaseCreateApiArgs = IApiPost<IDiseaseCreateSchema>;

export type IDiseaseUpdateApiArgs = IApiPut<IDiseaseUpdateSchema, IDiseaseEntity["id"]>;

export type IDiseaseDeleteApiArgs = IApiDelete<IDiseaseEntity["id"]>;
