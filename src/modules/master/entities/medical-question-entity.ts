import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { IMedicalQuestionCreateSchema, IMedicalQuestionUpdateSchema } from "../schemes";

import { IFileEntity } from "@/modules/core";

// ----------------------------------------------------------------------

export type IMedicalQuestionEntity = {
  id: number;
  name: string;
  groupId: number;
  picture?: IFileEntity;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type IMedicalQuestionGetAllResponse = IPaginationResponse<IMedicalQuestionEntity>;

export type IMedicalQuestionGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type IMedicalQuestionGetDetailsResponse = IDataResponse<IMedicalQuestionEntity>;

export type IMedicalQuestionGetDetailsParams = {};

// ----------------------------------------------------------------------

export type IMedicalQuestionGetAllApiArgs = IApiGet<IMedicalQuestionGetAllParams>;

export type IMedicalQuestionGetDetailsApiArgs = IApiGet<IMedicalQuestionGetDetailsParams> & {
  id: IMedicalQuestionEntity["id"];
};

export type IMedicalQuestionCreateApiArgs = IApiPost<IMedicalQuestionCreateSchema>;

export type IMedicalQuestionUpdateApiArgs = IApiPut<IMedicalQuestionUpdateSchema, IMedicalQuestionEntity["id"]>;

export type IMedicalQuestionDeleteApiArgs = IApiDelete<IMedicalQuestionEntity["id"]>;
