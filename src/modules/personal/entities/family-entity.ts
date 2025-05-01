import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { IFamilyCreateSchema, IFamilyUpdateSchema, IFamilyCreateMultipleSchema, IFamilyUpdateMultipleSchema } from "../schemes";
import { ICodeEntity } from "./code-entity";

// ----------------------------------------------------------------------

export type IFamilyEntity = {
  id: number;
  main: number;
  name: string;
  status: ICodeEntity;
  birthDate: string;
  education: ICodeEntity;
  job: string;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type IFamilyGetAllResponse = IPaginationResponse<IFamilyEntity>;

export type IFamilyGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type IFamilyGetDetailsResponse = IDataResponse<IFamilyEntity>;

export type IFamilyGetDetailsParams = {};

// ----------------------------------------------------------------------

export type IFamilyGetAllApiArgs = IApiGet<IFamilyGetAllParams>;

export type IFamilyGetDetailsApiArgs = IApiGet<IFamilyGetDetailsParams> & {
  id: IFamilyEntity["id"];
};

export type IFamilyCreateApiArgs = IApiPost<IFamilyCreateSchema>;

export type IFamilyUpdateApiArgs = IApiPut<IFamilyUpdateSchema, IFamilyEntity["id"]>;

export type IFamilyDeleteApiArgs = IApiDelete<IFamilyEntity["id"]>;

// ----------------------------------------------------------------------
export type IFamilyCreateMultipleApiArgs = IApiPost<IFamilyCreateMultipleSchema>;
export type IFamilyUpdateMultipleApiArgs = {
  payload: IFamilyUpdateMultipleSchema;
};