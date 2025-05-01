import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IJobTypeCreateApiArgs,
  IJobTypeDeleteApiArgs,
  IJobTypeGetAllApiArgs,
  IJobTypeGetAllResponse,
  IJobTypeGetDetailsApiArgs,
  IJobTypeGetDetailsResponse,
  IJobTypeUpdateApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class JobTypeApi {
  static getAll = async (args: IJobTypeGetAllApiArgs) => {
    const result = await axiosInstance.get<IJobTypeGetAllResponse>(
      endpoints.jobtype.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: IJobTypeGetDetailsApiArgs) => {
    const result = await axiosInstance.get<IJobTypeGetDetailsResponse>(
      endpoints.jobtype.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: IJobTypeCreateApiArgs) => {
    const result = await axiosInstance.post<IJobTypeGetDetailsResponse>(
      endpoints.jobtype.create,
      args.payload
    );

    return result.data;
  };

  static update = async (args: IJobTypeUpdateApiArgs) => {
    const result = await axiosInstance.patch<IJobTypeGetDetailsResponse>(
      endpoints.jobtype.update(args.id),
      args.payload
    );

    return result.data;
  };

  static delete = async (args: IJobTypeDeleteApiArgs) => {
    const result = await axiosInstance.delete<IJobTypeGetDetailsResponse>(
      endpoints.jobtype.delete(args.id)
    );

    return result.data;
  };
}
