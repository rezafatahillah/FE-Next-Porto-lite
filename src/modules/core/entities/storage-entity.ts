import { IApiPost, IDataResponse } from "@/utils/entities";

import {
  IStorageMultipleUploadSchema,
  IStorageUploadDirectSchema,
  IStorageUploadSchema,
} from "../schemes";

// ----------------------------------------------------------------------

export type IFileEntity = {
  id: number;
  fileDirectoryId: number;
  extension: string;
  name: string;
  size: number;
  url: string;
  createdAt: string;
  updatedAt: string;
};

export type IDirectoryEntity = {
  id: number;
  parentId: IDirectoryEntity["id"];
  name: string;
  path: string;
  totalItem: number;
  totalSize: number;
  totalSizeInKb: number;
  totalSizeInMb: number;
  starred: boolean;
  editable: boolean;
  removable: boolean;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type IStorageEntity = IFileEntity;

// ----------------------------------------------------------------------

export type IStorageUploadResponse = IDataResponse<IStorageEntity>;
export type IStorageDeleteResponse = IDataResponse<void>;

// ----------------------------------------------------------------------

export type IStorageUploadApiArgs = IApiPost<IStorageUploadSchema>;

export type IStorageUploadDirectApiArgs = IApiPost<IStorageUploadDirectSchema>;

export type IStorageMultipleUploadApiArgs =
  IApiPost<IStorageMultipleUploadSchema>;

export type IStorageDeleteApiArgs = { id: IFileEntity["id"] };
