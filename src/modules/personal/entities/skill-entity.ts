import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { ISkillCreateSchema, ISkillUpdateSchema } from "../schemes";

import { ISkillCommonEntity } from "@/modules/master";
import { ICodeEntity } from "./code-entity";

// ----------------------------------------------------------------------

export type ISkillEntity = {
  id: number;
  skillCommonId: ISkillCommonEntity;
  skillLevel: ICodeEntity;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type ISkillGetAllResponse = IPaginationResponse<ISkillEntity>;

export type ISkillGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type ISkillGetDetailsResponse = IDataResponse<ISkillEntity>;

export type ISkillGetDetailsParams = {};

// ----------------------------------------------------------------------

export type ISkillGetAllApiArgs = IApiGet<ISkillGetAllParams>;

export type ISkillGetDetailsApiArgs = IApiGet<ISkillGetDetailsParams> & {
  id: ISkillEntity["id"];
};

export type ISkillCreateApiArgs = IApiPost<ISkillCreateSchema>;

export type ISkillUpdateApiArgs = IApiPut<ISkillUpdateSchema, ISkillEntity["id"]>;

export type ISkillDeleteApiArgs = IApiDelete<ISkillEntity["id"]>;
