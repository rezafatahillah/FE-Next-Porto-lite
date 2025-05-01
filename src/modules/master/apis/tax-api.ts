import { axiosInstance, endpoints } from "@/libs/axios";

import {
  ITaxCreateApiArgs,
  ITaxDeleteApiArgs,
  ITaxGetAllApiArgs,
  ITaxGetAllResponse,
  ITaxGetDetailsApiArgs,
  ITaxGetDetailsResponse,
  ITaxUpdateApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class TaxApi {
  static getAll = async (args: ITaxGetAllApiArgs) => {
    const result = await axiosInstance.get<ITaxGetAllResponse>(
      endpoints.tax.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: ITaxGetDetailsApiArgs) => {
    const result = await axiosInstance.get<ITaxGetDetailsResponse>(
      endpoints.tax.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: ITaxCreateApiArgs) => {
    const result = await axiosInstance.post<ITaxGetDetailsResponse>(
      endpoints.tax.create,
      args.payload
    );

    return result.data;
  };

  static update = async (args: ITaxUpdateApiArgs) => {
    const result = await axiosInstance.patch<ITaxGetDetailsResponse>(
      endpoints.tax.update(args.id),
      args.payload
    );

    return result.data;
  };

  static delete = async (args: ITaxDeleteApiArgs) => {
    const result = await axiosInstance.delete<ITaxGetDetailsResponse>(
      endpoints.tax.delete(args.id)
    );

    return result.data;
  };
}
