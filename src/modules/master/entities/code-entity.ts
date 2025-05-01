import {
  IApiGet,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";

// ----------------------------------------------------------------------

export type ICodeEntity = {
  code: string;
  name: string;
  type: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type ICodeGetAllResponse = IPaginationResponse<ICodeEntity>;

export type ICodeGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type ICodeGetDetailsResponse = IDataResponse<ICodeEntity>;

export type ICodeGetDetailsParams = {};

// ----------------------------------------------------------------------

export type ICodeGetAllApiArgs = IApiGet<ICodeGetAllParams>;
