import { axiosInstance, endpoints } from "@/libs/axios";

import {
  ICodeGetAllApiArgs,
  ICodeGetAllResponse,
} from "../entities";

// ----------------------------------------------------------------------

export class CodeApi {
  static getAll = async (args: ICodeGetAllApiArgs) => {
    const result = await axiosInstance.get<ICodeGetAllResponse>(
      endpoints.code.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getByType = async (type: string, args: ICodeGetAllApiArgs) => {
    const result = await axiosInstance.get<ICodeGetAllResponse>(
      `${endpoints.code.getAll}/${type}`,
      {
        params: args.params,
      }
    );
    return result.data;
  };
}
