import { IApiGet, IDataResponse, IDefaultParams } from '@/utils/entities';

import { ConfigCodeEnum, ConfigTypeEnum } from '../enums';

// ----------------------------------------------------------------------

export type IConfigCodeEntity = {
  id: number;
  name: string;
  type: ConfigTypeEnum;
  code: ConfigCodeEnum;
  createdAt: string;
  updatedAt: string;
};

// ----------------------------------------------------------------------

export type IConfigGetCodesResponse = IDataResponse<IConfigCodeEntity[]>;

export type IConfigGetCodesParams = IDefaultParams & {};

// ----------------------------------------------------------------------

export type IConfigGetCodesApiArgs = IApiGet<IConfigGetCodesParams>;
