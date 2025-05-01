import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { IEducationCreateSchema, IEducationUpdateSchema, IEducationCreateMultipleSchema, IEducationUpdateMultipleSchema  } from "../schemes";

import { ICodeEntity } from "./code-entity";

// ----------------------------------------------------------------------

export type IEducationEntity = {
  id: number;
  education: ICodeEntity;
  name: string;
  city: string;
  status: ICodeEntity;
  study: string;
  yearStart: string;
  yearEnd: string;
  yearInformal: string;
  duration: number;
  certificate: boolean;
  // picture?: IFileEntity;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type IEducationGetAllResponse = IPaginationResponse<IEducationEntity>;

export type IEducationGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type IEducationGetDetailsResponse = IDataResponse<IEducationEntity>;

export type IEducationGetDetailsParams = {};

// ----------------------------------------------------------------------

export type IEducationGetAllApiArgs = IApiGet<IEducationGetAllParams>;

export type IEducationGetDetailsApiArgs = IApiGet<IEducationGetDetailsParams> & {
  id: IEducationEntity["id"];
};

export type IEducationCreateApiArgs = IApiPost<IEducationCreateSchema>;

export type IEducationUpdateApiArgs = IApiPut<IEducationUpdateSchema, IEducationEntity["id"]>;

export type IEducationDeleteApiArgs = IApiDelete<IEducationEntity["id"]>;

// ----------------------------------------------------------------------
export type IEducationCreateMultipleApiArgs = IApiPost<IEducationCreateMultipleSchema>;
export type IEducationUpdateMultipleApiArgs = {
  payload: IEducationUpdateMultipleSchema;
};