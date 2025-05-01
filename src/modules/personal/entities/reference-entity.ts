import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { IReferenceCreateSchema, IReferenceUpdateSchema } from "../schemes";

import { IFileEntity } from "@/modules/core";

// ----------------------------------------------------------------------

export type IReferenceEntity = {
  id: number;
  name: string;
  address: string;
  phone: string;
  position: string;
  relation: string;
  picture?: IFileEntity;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type IReferenceGetAllResponse = IPaginationResponse<IReferenceEntity>;

export type IReferenceGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type IReferenceGetDetailsResponse = IDataResponse<IReferenceEntity>;

export type IReferenceGetDetailsParams = {};

// ----------------------------------------------------------------------

export type IReferenceGetAllApiArgs = IApiGet<IReferenceGetAllParams>;

export type IReferenceGetDetailsApiArgs = IApiGet<IReferenceGetDetailsParams> & {
  id: IReferenceEntity["id"];
};

export type IReferenceCreateApiArgs = IApiPost<IReferenceCreateSchema>;

export type IReferenceUpdateApiArgs = IApiPut<IReferenceUpdateSchema, IReferenceEntity["id"]>;

export type IReferenceDeleteApiArgs = IApiDelete<IReferenceEntity["id"]>;
