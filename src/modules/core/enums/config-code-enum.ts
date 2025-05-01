export enum AuthTokenCodeEnum {
  AccessToken = "OAT001",
}

export enum UserTypeCodeEnum {
  Operator = "UTP001",
}

export enum AccountStatusCodeEnum {
  Enable = "AST001",
  Disable = "AST002",
}

export enum FileCodeEnum {
  FileManager = "FIL000",
  ProfilePicture = "FIL001",
  FileCandidate = "FIL002",
}

// ----------------------------------------------------------------------

export type ConfigCodeEnum =
  | AuthTokenCodeEnum
  | UserTypeCodeEnum
  | AccountStatusCodeEnum
  | FileCodeEnum;

export enum ConfigTypeEnum {
  AuthToken = "auth-token",
  UserType = "user-type",
  AccountStatus = "account-status",
  File = "file",
}

// ----------------------------------------------------------------------

export type StorageCodeEnum = FileCodeEnum;
export const StorageCodeConst = { ...FileCodeEnum };
