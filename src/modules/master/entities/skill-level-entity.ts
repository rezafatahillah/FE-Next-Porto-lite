import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { ISkillLevelCreateSchema, ISkillLevelUpdateSchema } from "../schemes";

import { IFileEntity } from "@/modules/core";

// ----------------------------------------------------------------------

export type ISkillLevelEntity = {
  id: number;
  name: string;
  picture?: IFileEntity;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type ISkillLevelGetAllResponse = IPaginationResponse<ISkillLevelEntity>;

export type ISkillLevelGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type ISkillLevelGetDetailsResponse = IDataResponse<ISkillLevelEntity>;

export type ISkillLevelGetDetailsParams = {};

// ----------------------------------------------------------------------

export type ISkillLevelGetAllApiArgs = IApiGet<ISkillLevelGetAllParams>;

export type ISkillLevelGetDetailsApiArgs = IApiGet<ISkillLevelGetDetailsParams> & {
  id: ISkillLevelEntity["id"];
};

export type ISkillLevelCreateApiArgs = IApiPost<ISkillLevelCreateSchema>;

export type ISkillLevelUpdateApiArgs = IApiPut<ISkillLevelUpdateSchema, ISkillLevelEntity["id"]>;

export type ISkillLevelDeleteApiArgs = IApiDelete<ISkillLevelEntity["id"]>;
