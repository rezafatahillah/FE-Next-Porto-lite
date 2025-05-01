import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IMedicalCreateApiArgs,
  IMedicalCreateMultipleApiArgs,
  IMedicalDeleteApiArgs,
  IMedicalGetAllApiArgs,
  IMedicalGetAllResponse,
  IMedicalGetDetailsApiArgs,
  IMedicalGetDetailsResponse,
  IMedicalUpdateApiArgs,
  IMedicalUpdateMultipleApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class MedicalApi {
  static getAll = async (args: IMedicalGetAllApiArgs) => {
    const result = await axiosInstance.get<IMedicalGetAllResponse>(
      endpoints.medical.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getAllCustom = async (args: IMedicalGetAllApiArgs) => {
    const result = await axiosInstance.get<IMedicalGetAllResponse>(
      endpoints.medical.getAllCustom,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: IMedicalGetDetailsApiArgs) => {
    const result = await axiosInstance.get<IMedicalGetDetailsResponse>(
      endpoints.medical.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: IMedicalCreateApiArgs) => {
    const result = await axiosInstance.post<IMedicalGetDetailsResponse>(
      endpoints.medical.create,
      args.payload
    );

    return result.data;
  };

  static createMultiple = async (args: IMedicalCreateMultipleApiArgs) => {
    const result = await axiosInstance.post<IMedicalGetDetailsResponse>(
      endpoints.medical.createMultiple,
      args.payload
    );

    return result.data;
  };

  static update = async (args: IMedicalUpdateApiArgs) => {
    const result = await axiosInstance.patch<IMedicalGetDetailsResponse>(
      endpoints.medical.update(args.id),
      args.payload
    );

    return result.data;
  };

  static updateMultiple = async (args: IMedicalUpdateMultipleApiArgs) => {
    const result = await axiosInstance.patch<IMedicalGetDetailsResponse>(
      endpoints.medical.updateMultiple,
      args.payload
    );

    return result.data;
  };

  static delete = async (args: IMedicalDeleteApiArgs) => {
    const result = await axiosInstance.delete<IMedicalGetDetailsResponse>(
      endpoints.medical.delete(args.id)
    );

    return result.data;
  };
}
