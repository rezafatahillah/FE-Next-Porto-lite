import { axiosInstance, endpoints } from '@/libs/axios';

import { IConfigGetCodesApiArgs, IConfigGetCodesResponse } from '../entities';

// ----------------------------------------------------------------------

export class ConfigApi {
  static getCodes = async (args: IConfigGetCodesApiArgs) => {
    const result = await axiosInstance.get<IConfigGetCodesResponse>(endpoints.config.code.getAll, {
      params: args.params,
    });

    return result.data;
  };
}
