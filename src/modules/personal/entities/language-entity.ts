import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { ILanguageCreateSchema, ILanguageUpdateSchema } from "../schemes";

import { IFileEntity } from "@/modules/core";
import { ICodeEntity } from "./code-entity";

// ----------------------------------------------------------------------

export type ILanguageEntity = {
  id: number;
  name: string;
  skillLevel: ICodeEntity;
  // skillLevel: string;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type ILanguageGetAllResponse = IPaginationResponse<ILanguageEntity>;

export type ILanguageGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type ILanguageGetDetailsResponse = IDataResponse<ILanguageEntity>;

export type ILanguageGetDetailsParams = {};

// ----------------------------------------------------------------------

export type ILanguageGetAllApiArgs = IApiGet<ILanguageGetAllParams>;

export type ILanguageGetDetailsApiArgs = IApiGet<ILanguageGetDetailsParams> & {
  id: ILanguageEntity["id"];
};

export type ILanguageCreateApiArgs = IApiPost<ILanguageCreateSchema>;

export type ILanguageUpdateApiArgs = IApiPut<ILanguageUpdateSchema, ILanguageEntity["id"]>;

export type ILanguageDeleteApiArgs = IApiDelete<ILanguageEntity["id"]>;
