import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IReferenceCreateApiArgs,
  IReferenceDeleteApiArgs,
  IReferenceGetAllApiArgs,
  IReferenceGetAllResponse,
  IReferenceGetDetailsApiArgs,
  IReferenceGetDetailsResponse,
  IReferenceUpdateApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class ReferenceApi {
  static getAll = async (args: IReferenceGetAllApiArgs) => {
    const result = await axiosInstance.get<IReferenceGetAllResponse>(
      endpoints.reference.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: IReferenceGetDetailsApiArgs) => {
    const result = await axiosInstance.get<IReferenceGetDetailsResponse>(
      endpoints.reference.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: IReferenceCreateApiArgs) => {
    const result = await axiosInstance.post<IReferenceGetDetailsResponse>(
      endpoints.reference.create,
      args.payload
    );

    return result.data;
  };

  static update = async (args: IReferenceUpdateApiArgs) => {
    const result = await axiosInstance.patch<IReferenceGetDetailsResponse>(
      endpoints.reference.update(args.id),
      args.payload
    );

    return result.data;
  };

  static delete = async (args: IReferenceDeleteApiArgs) => {
    const result = await axiosInstance.delete<IReferenceGetDetailsResponse>(
      endpoints.reference.delete(args.id)
    );

    return result.data;
  };
}
