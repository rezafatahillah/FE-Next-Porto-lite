import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IDiseaseCreateApiArgs,
  IDiseaseDeleteApiArgs,
  IDiseaseGetAllApiArgs,
  IDiseaseGetAllResponse,
  IDiseaseGetDetailsApiArgs,
  IDiseaseGetDetailsResponse,
  IDiseaseUpdateApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class DiseaseApi {
  static getAll = async (args: IDiseaseGetAllApiArgs) => {
    const result = await axiosInstance.get<IDiseaseGetAllResponse>(
      endpoints.disease.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getAllCustom = async (args: IDiseaseGetAllApiArgs) => {
    const result = await axiosInstance.get<IDiseaseGetAllResponse>(
      endpoints.disease.getAllCustom,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: IDiseaseGetDetailsApiArgs) => {
    const result = await axiosInstance.get<IDiseaseGetDetailsResponse>(
      endpoints.disease.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: IDiseaseCreateApiArgs) => {
    const result = await axiosInstance.post<IDiseaseGetDetailsResponse>(
      endpoints.disease.create,
      args.payload
    );

    return result.data;
  };

  static update = async (args: IDiseaseUpdateApiArgs) => {
    const result = await axiosInstance.patch<IDiseaseGetDetailsResponse>(
      endpoints.disease.update(args.id),
      args.payload
    );

    return result.data;
  };

  static delete = async (args: IDiseaseDeleteApiArgs) => {
    const result = await axiosInstance.delete<IDiseaseGetDetailsResponse>(
      endpoints.disease.delete(args.id)
    );

    return result.data;
  };
}
