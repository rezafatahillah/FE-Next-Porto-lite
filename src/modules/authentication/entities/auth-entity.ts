import { IApiPost, IDataResponse } from "@/utils/entities";

import { PermissionSlugEnum } from "@/modules/account-management";

import {
  IAuthRequestResetPasswordSchema,
  IAuthResetPasswordSchema,
  IAuthResetPasswordSchemaWithSigned,
  IAuthSignInSchema,
  IAuthSignUpSchema,
} from "../schemes";
import { IProfileEntity } from "./profile-entity";

// ----------------------------------------------------------------------

export type ISignInEntity = {
  profile: IProfileEntity;
  accessToken: string;
  accessTokenExpAt: number;
  refreshToken?: string;
  refreshTokenExpAt?: number;
  abilities: PermissionSlugEnum[];
};

export type ISessionEntity = ISignInEntity;

// ----------------------------------------------------------------------

export type IAuthSignInResponse = IDataResponse<ISignInEntity>;

export type IAuthRefreshResponse = IDataResponse<ISignInEntity>;

export type IAuthSignUpResponse = IDataResponse<ISignInEntity>;

// ----------------------------------------------------------------------

export type IAuthSignInApiArgs = IApiPost<IAuthSignInSchema>;

export type IAuthRefreshApiArgs = IApiPost<{
  refreshToken: string;
}>;

export type IAuthSignUpApiArgs = IApiPost<IAuthSignUpSchema>;

export type IAuthEmailVerificationApiArgs = IApiPost<{
  signed: string;
  token: string;
}>;

export type IAuthRequestResetPasswordApiArgs =
  IApiPost<IAuthRequestResetPasswordSchema>;

export type IAuthResetPasswordApiArgs =
  IApiPost<IAuthResetPasswordSchemaWithSigned>;
