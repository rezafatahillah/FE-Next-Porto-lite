import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IProfileUpdatePasswordApiArgs,
  IProfileGetMySelfApiArgs,
  IProfileGetMySelfResponse,
  IProfileUpdateProfileApiArgs,
} from "../entities";
import { INoDataResponse } from "@/utils/entities";
import { IStorageUploadDirectApiArgs } from "@/modules/core";
import { StorageApi } from "@/modules/core/apis";

// ----------------------------------------------------------------------

export class ProfileApi {
  static getMySelf = async (args: IProfileGetMySelfApiArgs) => {
    const result = await axiosInstance.get<IProfileGetMySelfResponse>(
      endpoints.profile.getMySelf,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static updateProfile = async (args: IProfileUpdateProfileApiArgs) => {
    const result = await axiosInstance.patch<INoDataResponse>(
      endpoints.profile.updateProfile,
      args.payload
    );

    return result.data;
  };

  static updatePassword = async (args: IProfileUpdatePasswordApiArgs) => {
    const result = await axiosInstance.patch<INoDataResponse>(
      endpoints.profile.updatePassword,
      args.payload
    );

    return result;
  };

  static updatePicture = async (args: IStorageUploadDirectApiArgs) => {
    const result = await StorageApi.uploadDirect(
      endpoints.profile.updatePicture,
      args
    );

    return result.data;
  };
}
