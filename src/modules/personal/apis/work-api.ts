import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IWorkCreateApiArgs,
  IWorkDeleteApiArgs,
  IWorkGetAllApiArgs,
  IWorkGetAllResponse,
  IWorkGetDetailsApiArgs,
  IWorkGetDetailsResponse,
  IWorkUpdateApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class WorkApi {
  static getAll = async (args: IWorkGetAllApiArgs) => {
    const result = await axiosInstance.get<IWorkGetAllResponse>(
      endpoints.work.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: IWorkGetDetailsApiArgs) => {
    const result = await axiosInstance.get<IWorkGetDetailsResponse>(
      endpoints.work.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: IWorkCreateApiArgs) => {
    const result = await axiosInstance.post<IWorkGetDetailsResponse>(
      endpoints.work.create,
      args.payload
    );

    return result.data;
  };

  static update = async (args: IWorkUpdateApiArgs) => {
    const result = await axiosInstance.patch<IWorkGetDetailsResponse>(
      endpoints.work.update(args.id),
      args.payload
    );

    return result.data;
  };

  static delete = async (args: IWorkDeleteApiArgs) => {
    const result = await axiosInstance.delete<IWorkGetDetailsResponse>(
      endpoints.work.delete(args.id)
    );

    return result.data;
  };
}
