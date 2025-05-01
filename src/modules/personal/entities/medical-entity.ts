import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { IMedicalCreateSchema, IMedicalCreateMultipleSchema, IMedicalUpdateSchema, IMedicalUpdateMultipleSchema } from "../schemes";

import { IDiseaseEntity } from "@/modules/master";
import { ICodeEntity } from "./code-entity";

// ----------------------------------------------------------------------

export type IMedicalEntity = {
  id: number;
  diseaseId: IDiseaseEntity;
  answer: ICodeEntity;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type IMedicalGetAllResponse = IPaginationResponse<IMedicalEntity>;

export type IMedicalGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type IMedicalGetDetailsResponse = IDataResponse<IMedicalEntity>;

export type IMedicalGetDetailsParams = {};

// ----------------------------------------------------------------------

export type IMedicalGetAllApiArgs = IApiGet<IMedicalGetAllParams>;

export type IMedicalGetDetailsApiArgs = IApiGet<IMedicalGetDetailsParams> & {
  id: IMedicalEntity["id"];
};

export type IMedicalCreateApiArgs = IApiPost<IMedicalCreateSchema>;

export type IMedicalUpdateApiArgs = IApiPut<IMedicalUpdateSchema, IMedicalEntity["id"]>;

export type IMedicalDeleteApiArgs = IApiDelete<IMedicalEntity["id"]>;

// ----------------------------------------------------------------------
export type IMedicalCreateMultipleApiArgs = IApiPost<IMedicalCreateMultipleSchema>;
// export type IMedicalUpdateMultipleApiArgs = IApiPut<IMedicalUpdateMultipleSchema, IMedicalEntity["id"]>;
export type IMedicalUpdateMultipleApiArgs = {
  payload: IMedicalUpdateMultipleSchema;
};



