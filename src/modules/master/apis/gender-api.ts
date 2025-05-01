import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IGenderCreateApiArgs,
  IGenderDeleteApiArgs,
  IGenderGetAllApiArgs,
  IGenderGetAllResponse,
  IGenderGetDetailsApiArgs,
  IGenderGetDetailsResponse,
  IGenderUpdateApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class GenderApi {
  static getAll = async (args: IGenderGetAllApiArgs) => {
    const result = await axiosInstance.get<IGenderGetAllResponse>(
      endpoints.gender.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: IGenderGetDetailsApiArgs) => {
    const result = await axiosInstance.get<IGenderGetDetailsResponse>(
      endpoints.gender.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: IGenderCreateApiArgs) => {
    const result = await axiosInstance.post<IGenderGetDetailsResponse>(
      endpoints.gender.create,
      args.payload
    );

    return result.data;
  };

  static update = async (args: IGenderUpdateApiArgs) => {
    const result = await axiosInstance.patch<IGenderGetDetailsResponse>(
      endpoints.gender.update(args.id),
      args.payload
    );

    return result.data;
  };

  static delete = async (args: IGenderDeleteApiArgs) => {
    const result = await axiosInstance.delete<IGenderGetDetailsResponse>(
      endpoints.gender.delete(args.id)
    );

    return result.data;
  };
}
