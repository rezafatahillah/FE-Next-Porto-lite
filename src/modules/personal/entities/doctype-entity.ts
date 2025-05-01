import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { IDoctypeCreateSchema, IDoctypeCreateMultipleSchema, IDoctypeUpdateSchema } from "../schemes";

import { IFileEntity } from "@/modules/core";

// ----------------------------------------------------------------------

export type IDoctypeEntity = {
  id: number;
  fileId?: IFileEntity,
  name: string,
  required: number,
  group: string,
  active: number,
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type IDoctypeGetAllResponse = IPaginationResponse<IDoctypeEntity>;

export type IDoctypeGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type IDoctypeGetDetailsResponse = IDataResponse<IDoctypeEntity>;

export type IDoctypeGetDetailsParams = {};

// ----------------------------------------------------------------------

export type IDoctypeGetAllApiArgs = IApiGet<IDoctypeGetAllParams>;

export type IDoctypeGetDetailsApiArgs = IApiGet<IDoctypeGetDetailsParams> & {
  id: IDoctypeEntity["id"];
};

export type IDoctypeCreateApiArgs = IApiPost<IDoctypeCreateSchema>;

export type IDoctypeUpdateApiArgs = IApiPut<IDoctypeUpdateSchema, IDoctypeEntity["id"]>;

export type IDoctypeDeleteApiArgs = IApiDelete<IDoctypeEntity["id"]>;

// ----------------------------------------------------------------------
export type IDoctypeCreateMultipleApiArgs = IApiPost<IDoctypeCreateMultipleSchema>;
// export type IDoctypeUpdateMultipleApiArgs = IApiPut<IDoctypeUpdateMultipleSchema, IDoctypeEntity["id"]>;
// export type IDoctypeUpdateMultipleApiArgs = {
//   payload: IDoctypeUpdateMultipleSchema;
// };
