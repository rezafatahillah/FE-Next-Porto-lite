import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IReligionCreateApiArgs,
  IReligionDeleteApiArgs,
  IReligionGetAllApiArgs,
  IReligionGetAllResponse,
  IReligionGetDetailsApiArgs,
  IReligionGetDetailsResponse,
  IReligionUpdateApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class ReligionApi {
  static getAll = async (args: IReligionGetAllApiArgs) => {
    const result = await axiosInstance.get<IReligionGetAllResponse>(
      endpoints.religion.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: IReligionGetDetailsApiArgs) => {
    const result = await axiosInstance.get<IReligionGetDetailsResponse>(
      endpoints.religion.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: IReligionCreateApiArgs) => {
    const result = await axiosInstance.post<IReligionGetDetailsResponse>(
      endpoints.religion.create,
      args.payload
    );

    return result.data;
  };

  static update = async (args: IReligionUpdateApiArgs) => {
    const result = await axiosInstance.patch<IReligionGetDetailsResponse>(
      endpoints.religion.update(args.id),
      args.payload
    );

    return result.data;
  };

  static delete = async (args: IReligionDeleteApiArgs) => {
    const result = await axiosInstance.delete<IReligionGetDetailsResponse>(
      endpoints.religion.delete(args.id)
    );

    return result.data;
  };
}
