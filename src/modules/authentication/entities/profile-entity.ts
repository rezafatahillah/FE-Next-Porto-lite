import { IApiGet, IApiPost, IDataResponse } from "@/utils/entities";

import {
  IProfileUpdatePasswordSchema,
  IProfileUpdateProfileSchema,
} from "../schemes";
import { IAccessRoleEntity } from "@/modules/account-management";
import {
  IFileEntity,
  INotificationTokenEntity,
  IStorageUploadDirectSchema,
} from "@/modules/core";

// ----------------------------------------------------------------------

export type IProfileEntity = {
  id: string;
  type: string;
  name: string;
  email: string;
  emailVerifiedAt: string | null;
  picture: IFileEntity | null;
  role: IAccessRoleEntity;
  notificationTokens: INotificationTokenEntity[];
  createdAt: string;
  updatedAt: string;
};

// ----------------------------------------------------------------------

export type IProfileGetMySelfResponse = IDataResponse<IProfileEntity>;

export type IProfileGetMySelfParams = {};

// ----------------------------------------------------------------------

export type IProfileGetMySelfApiArgs = IApiGet<IProfileGetMySelfParams>;

export type IProfileUpdateProfileApiArgs =
  IApiPost<IProfileUpdateProfileSchema>;

export type IProfileUpdatePasswordApiArgs =
  IApiPost<IProfileUpdatePasswordSchema>;

export type IProfileUpdatePictureApiArgs = IApiPost<IStorageUploadDirectSchema>;
