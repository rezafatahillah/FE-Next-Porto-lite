
import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { ISkillCommonCreateSchema, ISkillCommonUpdateSchema } from "../schemes";

import { IFileEntity } from "@/modules/core";

// ----------------------------------------------------------------------

export type ISkillCommonEntity = {
  id: number;
  name: string;
  published: boolean;
  slug: string;
  picture?: IFileEntity;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type ISkillCommonGetAllResponse = IPaginationResponse<ISkillCommonEntity>;

export type ISkillCommonGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type ISkillCommonGetDetailsResponse = IDataResponse<ISkillCommonEntity>;

export type ISkillCommonGetDetailsParams = {};

// ----------------------------------------------------------------------

export type ISkillCommonGetAllApiArgs = IApiGet<ISkillCommonGetAllParams>;

export type ISkillCommonGetDetailsApiArgs = IApiGet<ISkillCommonGetDetailsParams> & {
  id: ISkillCommonEntity["id"];
};

export type ISkillCommonCreateApiArgs = IApiPost<ISkillCommonCreateSchema>;

export type ISkillCommonUpdateApiArgs = IApiPut<ISkillCommonUpdateSchema, ISkillCommonEntity["id"]>;

export type ISkillCommonDeleteApiArgs = IApiDelete<ISkillCommonEntity["id"]>;
