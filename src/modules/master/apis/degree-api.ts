import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IDegreeCreateApiArgs,
  IDegreeDeleteApiArgs,
  IDegreeGetAllApiArgs,
  IDegreeGetAllResponse,
  IDegreeGetDetailsApiArgs,
  IDegreeGetDetailsResponse,
  IDegreeUpdateApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class DegreeApi {
  static getAll = async (args: IDegreeGetAllApiArgs) => {
    const result = await axiosInstance.get<IDegreeGetAllResponse>(
      endpoints.degree.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: IDegreeGetDetailsApiArgs) => {
    const result = await axiosInstance.get<IDegreeGetDetailsResponse>(
      endpoints.degree.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: IDegreeCreateApiArgs) => {
    const result = await axiosInstance.post<IDegreeGetDetailsResponse>(
      endpoints.degree.create,
      args.payload
    );

    return result.data;
  };

  static update = async (args: IDegreeUpdateApiArgs) => {
    const result = await axiosInstance.patch<IDegreeGetDetailsResponse>(
      endpoints.degree.update(args.id),
      args.payload
    );

    return result.data;
  };

  static delete = async (args: IDegreeDeleteApiArgs) => {
    const result = await axiosInstance.delete<IDegreeGetDetailsResponse>(
      endpoints.degree.delete(args.id)
    );

    return result.data;
  };
}
