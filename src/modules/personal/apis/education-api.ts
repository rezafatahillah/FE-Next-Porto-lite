import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IEducationCreateApiArgs,
  IEducationCreateMultipleApiArgs,
  IEducationDeleteApiArgs,
  IEducationGetAllApiArgs,
  IEducationGetAllResponse,
  IEducationGetDetailsApiArgs,
  IEducationGetDetailsResponse,
  IEducationUpdateApiArgs,
  IEducationUpdateMultipleApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class EducationApi {
  static getAll = async (args: IEducationGetAllApiArgs) => {
    const result = await axiosInstance.get<IEducationGetAllResponse>(
      endpoints.education.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: IEducationGetDetailsApiArgs) => {
    const result = await axiosInstance.get<IEducationGetDetailsResponse>(
      endpoints.education.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: IEducationCreateApiArgs) => {
    const result = await axiosInstance.post<IEducationGetDetailsResponse>(
      endpoints.education.create,
      args.payload
    );

    return result.data;
  };

  static createMultiple = async (args: IEducationCreateMultipleApiArgs) => {
    const result = await axiosInstance.post<IEducationGetDetailsResponse>(
      endpoints.education.createMultiple,
      args.payload
    );

    return result.data;
  };

  static update = async (args: IEducationUpdateApiArgs) => {
    const result = await axiosInstance.patch<IEducationGetDetailsResponse>(
      endpoints.education.update(args.id),
      args.payload
    );

    return result.data;
  };

  static updateMultiple = async (args: IEducationUpdateMultipleApiArgs) => {
    const result = await axiosInstance.patch<IEducationGetDetailsResponse>(
      endpoints.education.updateMultiple,
      args.payload
    );

    return result.data;
  };

  static delete = async (args: IEducationDeleteApiArgs) => {
    const result = await axiosInstance.delete<IEducationGetDetailsResponse>(
      endpoints.education.delete(args.id)
    );

    return result.data;
  };
}
