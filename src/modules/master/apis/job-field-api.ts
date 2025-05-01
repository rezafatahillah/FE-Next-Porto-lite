import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IJobFieldCreateApiArgs,
  IJobFieldDeleteApiArgs,
  IJobFieldGetAllApiArgs,
  IJobFieldGetAllResponse,
  IJobFieldGetDetailsApiArgs,
  IJobFieldGetDetailsResponse,
  IJobFieldUpdateApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class JobFieldApi {
  static getAll = async (args: IJobFieldGetAllApiArgs) => {
    const result = await axiosInstance.get<IJobFieldGetAllResponse>(
      endpoints.jobfield.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: IJobFieldGetDetailsApiArgs) => {
    const result = await axiosInstance.get<IJobFieldGetDetailsResponse>(
      endpoints.jobfield.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: IJobFieldCreateApiArgs) => {
    const result = await axiosInstance.post<IJobFieldGetDetailsResponse>(
      endpoints.jobfield.create,
      args.payload
    );

    return result.data;
  };

  static update = async (args: IJobFieldUpdateApiArgs) => {
    const result = await axiosInstance.patch<IJobFieldGetDetailsResponse>(
      endpoints.jobfield.update(args.id),
      args.payload
    );

    return result.data;
  };

  static delete = async (args: IJobFieldDeleteApiArgs) => {
    const result = await axiosInstance.delete<IJobFieldGetDetailsResponse>(
      endpoints.jobfield.delete(args.id)
    );

    return result.data;
  };
}
