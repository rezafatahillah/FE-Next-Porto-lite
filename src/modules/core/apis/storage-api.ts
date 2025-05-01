import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IStorageUploadApiArgs,
  IStorageMultipleUploadApiArgs,
  IStorageUploadResponse,
  IStorageUploadDirectApiArgs,
  IStorageDeleteResponse,
} from "../entities";

// ----------------------------------------------------------------------

export class StorageApi {
  static delete = async (fileId: number) => {
    const endpoint = endpoints.storage.delete(fileId);
    const response = await axiosInstance.delete<IStorageDeleteResponse>(
      endpoint
    );
    return response.data;
  };

  static upload = async (args: IStorageUploadApiArgs) => {
    const { payload } = args;

    const formData = new FormData();
    formData.append("code", payload.code);
    formData.append("file", payload.file as File);

    const result = await axiosInstance.post<IStorageUploadResponse>(
      endpoints.storage.upload,
      args.payload,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    return result.data;
  };

  static uploadDirect = async (
    endpoint: string,
    args: IStorageUploadDirectApiArgs
  ) => {
    const formData = new FormData();
    formData.append("file", args.payload.file as File);

    const result = await axiosInstance.patch<IStorageUploadResponse>(
      endpoint,
      args.payload,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    return result.data;
  };

  static multipleUpload = async (args: IStorageMultipleUploadApiArgs) => {
    const result = await axiosInstance.post<IStorageUploadResponse>(
      endpoints.storage.multipleUpload,
      args.payload
    );

    return result.data;
  };
}
