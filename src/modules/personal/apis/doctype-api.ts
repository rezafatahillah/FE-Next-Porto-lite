import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IDoctypeCreateApiArgs,
  IDoctypeCreateMultipleApiArgs,
  IDoctypeDeleteApiArgs,
  IDoctypeGetAllApiArgs,
  IDoctypeGetAllResponse,
  IDoctypeGetDetailsApiArgs,
  IDoctypeGetDetailsResponse,
  IDoctypeUpdateApiArgs,
} from "../entities";

import { IStorageUploadDirectApiArgs } from "@/modules/core";
import { StorageApi } from "@/modules/core/apis";

// ----------------------------------------------------------------------

export class DoctypeApi {
  static getAll = async (args: IDoctypeGetAllApiArgs) => {
    const result = await axiosInstance.get<IDoctypeGetAllResponse>(
      endpoints.doctype.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: IDoctypeGetDetailsApiArgs) => {
    const result = await axiosInstance.get<IDoctypeGetDetailsResponse>(
      endpoints.doctype.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: IDoctypeCreateApiArgs) => {
    const result = await axiosInstance.post<IDoctypeGetDetailsResponse>(
      endpoints.doctype.create,
      args.payload
    );

    return result.data;
  };

  static createMultiple = async (args: IDoctypeCreateMultipleApiArgs) => {
    const result = await axiosInstance.post<IDoctypeGetDetailsResponse>(
      endpoints.doctype.createMultiple,
      args.payload
    );

    return result.data;
  };

  static update = async (args: IDoctypeUpdateApiArgs) => {
    const result = await axiosInstance.patch<IDoctypeGetDetailsResponse>(
      endpoints.doctype.update(args.id),
      args.payload
    );

    return result.data;
  };

  static updateFile = async (args: IStorageUploadDirectApiArgs) => {
    const result = await StorageApi.uploadDirect(
      endpoints.profile.updatePicture,
      args
    );

    return result.data;
  };

  static delete = async (args: IDoctypeDeleteApiArgs) => {
    const result = await axiosInstance.delete<IDoctypeGetDetailsResponse>(
      endpoints.doctype.delete(args.id)
    );

    return result.data;
  };
}
