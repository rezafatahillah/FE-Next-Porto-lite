import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { IOrganizationCreateSchema, IOrganizationUpdateSchema } from "../schemes";

import { IFileEntity } from "@/modules/core";

// ----------------------------------------------------------------------

export type IOrganizationEntity = {
  id: number;
  name: string;
  type: string;
  year: string;
  position: string;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type IOrganizationGetAllResponse = IPaginationResponse<IOrganizationEntity>;

export type IOrganizationGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type IOrganizationGetDetailsResponse = IDataResponse<IOrganizationEntity>;

export type IOrganizationGetDetailsParams = {};

// ----------------------------------------------------------------------

export type IOrganizationGetAllApiArgs = IApiGet<IOrganizationGetAllParams>;

export type IOrganizationGetDetailsApiArgs = IApiGet<IOrganizationGetDetailsParams> & {
  id: IOrganizationEntity["id"];
};

export type IOrganizationCreateApiArgs = IApiPost<IOrganizationCreateSchema>;

export type IOrganizationUpdateApiArgs = IApiPut<IOrganizationUpdateSchema, IOrganizationEntity["id"]>;

export type IOrganizationDeleteApiArgs = IApiDelete<IOrganizationEntity["id"]>;
