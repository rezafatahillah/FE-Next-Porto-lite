import { useMutation } from "@tanstack/react-query";

import { IHookQueryMutation } from "@/utils/entities";

import {
  IStorageMultipleUploadApiArgs,
  IStorageUploadApiArgs,
  IStorageUploadDirectApiArgs,
  IStorageDeleteApiArgs,
  IStorageUploadResponse,
  IStorageDeleteResponse,
} from "../../entities";
import { StorageApi } from "../../apis";
import { endpoints } from "@/libs/axios";

// ----------------------------------------------------------------------

export class StorageQuery {

  static useDelete = (
    args: IHookQueryMutation<IStorageDeleteApiArgs, IStorageDeleteResponse>
  ) => {
    return useMutation({
      mutationKey: ["StorageQuery-delete"],
      mutationFn: ({ id }: IStorageDeleteApiArgs) => StorageApi.delete(id),
      ...args.options, 
    });
  };
  

  static useUpload = (
    args: IHookQueryMutation<IStorageUploadApiArgs, IStorageUploadResponse>
  ) => {
    return useMutation({
      mutationKey: ["StorageQuery-upload"],
      mutationFn: StorageApi.upload,
      ...args.options,
    });
  };

  static useDirectUpload = (
    endpoint: string,
    args: IHookQueryMutation<
      IStorageUploadDirectApiArgs,
      IStorageUploadResponse
    >
  ) => {
    return useMutation({
      mutationKey: ["StorageQuery-direct-upload"],
      mutationFn: (args) => {
        return StorageApi.uploadDirect(endpoint, args);
      },
      ...args.options,
    });
  };

  static useMultipleUpload = (
    args: IHookQueryMutation<
      IStorageMultipleUploadApiArgs,
      IStorageUploadResponse
    >
  ) => {
    return useMutation({
      mutationKey: ["StorageQuery-multiple-upload"],
      mutationFn: StorageApi.multipleUpload,
      ...args.options,
    });
  };
}
