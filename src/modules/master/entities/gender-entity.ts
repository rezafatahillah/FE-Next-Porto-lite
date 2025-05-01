import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { IGenderCreateSchema, IGenderUpdateSchema } from "../schemes";

import { IFileEntity } from "@/modules/core";

// ----------------------------------------------------------------------

export type IGenderEntity = {
  id: number;
  name: string;
  picture?: IFileEntity;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type IGenderGetAllResponse = IPaginationResponse<IGenderEntity>;

export type IGenderGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type IGenderGetDetailsResponse = IDataResponse<IGenderEntity>;

export type IGenderGetDetailsParams = {};

// ----------------------------------------------------------------------

export type IGenderGetAllApiArgs = IApiGet<IGenderGetAllParams>;

export type IGenderGetDetailsApiArgs = IApiGet<IGenderGetDetailsParams> & {
  id: IGenderEntity["id"];
};

export type IGenderCreateApiArgs = IApiPost<IGenderCreateSchema>;

export type IGenderUpdateApiArgs = IApiPut<IGenderUpdateSchema, IGenderEntity["id"]>;

export type IGenderDeleteApiArgs = IApiDelete<IGenderEntity["id"]>;
