import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { ITaxCreateSchema, ITaxUpdateSchema } from "../schemes";

import { IFileEntity } from "@/modules/core";

// ----------------------------------------------------------------------

export type ITaxEntity = {
  id: number;
  name: string;
  picture?: IFileEntity;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type ITaxGetAllResponse = IPaginationResponse<ITaxEntity>;

export type ITaxGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type ITaxGetDetailsResponse = IDataResponse<ITaxEntity>;

export type ITaxGetDetailsParams = {};

// ----------------------------------------------------------------------

export type ITaxGetAllApiArgs = IApiGet<ITaxGetAllParams>;

export type ITaxGetDetailsApiArgs = IApiGet<ITaxGetDetailsParams> & {
  id: ITaxEntity["id"];
};

export type ITaxCreateApiArgs = IApiPost<ITaxCreateSchema>;

export type ITaxUpdateApiArgs = IApiPut<ITaxUpdateSchema, ITaxEntity["id"]>;

export type ITaxDeleteApiArgs = IApiDelete<ITaxEntity["id"]>;
