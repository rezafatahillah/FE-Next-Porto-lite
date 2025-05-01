
import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { IReligionCreateSchema, IReligionUpdateSchema } from "../schemes";

import { IFileEntity } from "@/modules/core";

// ----------------------------------------------------------------------

export type IReligionEntity = {
  id: number;
  name: string;
  picture?: IFileEntity;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type IReligionGetAllResponse = IPaginationResponse<IReligionEntity>;

export type IReligionGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type IReligionGetDetailsResponse = IDataResponse<IReligionEntity>;

export type IReligionGetDetailsParams = {};

// ----------------------------------------------------------------------

export type IReligionGetAllApiArgs = IApiGet<IReligionGetAllParams>;

export type IReligionGetDetailsApiArgs = IApiGet<IReligionGetDetailsParams> & {
  id: IReligionEntity["id"];
};

export type IReligionCreateApiArgs = IApiPost<IReligionCreateSchema>;

export type IReligionUpdateApiArgs = IApiPut<IReligionUpdateSchema, IReligionEntity["id"]>;

export type IReligionDeleteApiArgs = IApiDelete<IReligionEntity["id"]>;
