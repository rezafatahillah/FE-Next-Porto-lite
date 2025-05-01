import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IFamilyCreateApiArgs,
  IFamilyCreateMultipleApiArgs,
  IFamilyDeleteApiArgs,
  IFamilyGetAllApiArgs,
  IFamilyGetAllResponse,
  IFamilyGetDetailsApiArgs,
  IFamilyGetDetailsResponse,
  IFamilyUpdateApiArgs,
  IFamilyUpdateMultipleApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class FamilyApi {
  static getAll = async (args: IFamilyGetAllApiArgs) => {
    const result = await axiosInstance.get<IFamilyGetAllResponse>(
      endpoints.family.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: IFamilyGetDetailsApiArgs) => {
    const result = await axiosInstance.get<IFamilyGetDetailsResponse>(
      endpoints.family.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: IFamilyCreateApiArgs) => {
    const result = await axiosInstance.post<IFamilyGetDetailsResponse>(
      endpoints.family.create,
      args.payload
    );

    return result.data;
  };

  static createMultiple = async (args: IFamilyCreateMultipleApiArgs) => {
    const result = await axiosInstance.post<IFamilyGetDetailsResponse>(
      endpoints.family.createMultiple,
      args.payload
    );

    return result.data;
  };

  static update = async (args: IFamilyUpdateApiArgs) => {
    const result = await axiosInstance.patch<IFamilyGetDetailsResponse>(
      endpoints.family.update(args.id),
      args.payload
    );

    return result.data;
  };

  static updateMultiple = async (args: IFamilyUpdateMultipleApiArgs) => {
    const result = await axiosInstance.patch<IFamilyGetDetailsResponse>(
      endpoints.family.updateMultiple,
      args.payload
    );

    return result.data;
  };

  static delete = async (args: IFamilyDeleteApiArgs) => {
    const result = await axiosInstance.delete<IFamilyGetDetailsResponse>(
      endpoints.family.delete(args.id)
    );

    return result.data;
  };
}
