import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IMaritalStatusCreateApiArgs,
  IMaritalStatusDeleteApiArgs,
  IMaritalStatusGetAllApiArgs,
  IMaritalStatusGetAllResponse,
  IMaritalStatusGetDetailsApiArgs,
  IMaritalStatusGetDetailsResponse,
  IMaritalStatusUpdateApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class MaritalStatusApi {
  static getAll = async (args: IMaritalStatusGetAllApiArgs) => {
    const result = await axiosInstance.get<IMaritalStatusGetAllResponse>(
      endpoints.maritalstatus.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: IMaritalStatusGetDetailsApiArgs) => {
    const result = await axiosInstance.get<IMaritalStatusGetDetailsResponse>(
      endpoints.maritalstatus.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: IMaritalStatusCreateApiArgs) => {
    const result = await axiosInstance.post<IMaritalStatusGetDetailsResponse>(
      endpoints.maritalstatus.create,
      args.payload
    );

    return result.data;
  };

  static update = async (args: IMaritalStatusUpdateApiArgs) => {
    const result = await axiosInstance.patch<IMaritalStatusGetDetailsResponse>(
      endpoints.maritalstatus.update(args.id),
      args.payload
    );

    return result.data;
  };

  static delete = async (args: IMaritalStatusDeleteApiArgs) => {
    const result = await axiosInstance.delete<IMaritalStatusGetDetailsResponse>(
      endpoints.maritalstatus.delete(args.id)
    );

    return result.data;
  };
}
