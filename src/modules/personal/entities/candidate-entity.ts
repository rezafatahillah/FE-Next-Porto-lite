import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { ICandidateCreateSchema, ICandidateIdentityUpdateSchema, ICandidateOtherUpdateSchema, ICandidateProfileUpdateSchema } from "../schemes";
import { ICodeEntity } from "./code-entity";

// ----------------------------------------------------------------------

export type ICandidateEntity = {

  id: string;
  name?: string;
  email?: string;
  phone?: string;
  gender?: ICodeEntity;
  birthDate?: string;
  birthPlace?: string;
  religion?: ICodeEntity;
  marital?: ICodeEntity;
  otherReligion?: string;
  hobby?: string;
  summary?: string;
  address?: string;
  city?: string;
  postal?: string;
  addressDomicile?: string;
  cityDomicile?: string;
  postalDomicile?: string;

  ktp?: string;
  kk?: string;
  paspor?: string;
  simA?: string;
  simB?: string;
  simC?: string;
  bpjsKesehatan?: string;
  bpjsKetenagakerjaan?: string;
  npwp?: string;
  statusPtkp?: string;
  bankName?: string;
  accountNo?: string;
  accountName?: string;

  workTerm?: string;
  expectedSalary?: number;
  otherFacility?: string;
  availability?: string;
  interest?: string;
  reason?: string;
  strengths?: string;
  weaknesses?: string;
  weight?: number;
  height?: number;
  hospitalized?: string;
  psychologicalTest?: string;
  carOwnership?: string;
  carBrand?: string;
  carModel?: string;
  carYear?: number;
  bikeOwnership?: string;
  bikeBrand?: string;
  bikeModel?: string;
  bikeYear?: number;
};

// ----------------------------------------------------------------------

export type ICandidateGetAllResponse = IPaginationResponse<ICandidateEntity>;

export type ICandidateGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type ICandidateGetDetailsResponse = IDataResponse<ICandidateEntity>;

export type ICandidateGetDetailsParams = {};

// ----------------------------------------------------------------------

export type ICandidateGetAllApiArgs = IApiGet<ICandidateGetAllParams>;

export type ICandidateGetDetailsApiArgs = IApiGet<ICandidateGetDetailsParams> & {
  id: ICandidateEntity["id"];
};

export type ICandidateCreateApiArgs = IApiPost<ICandidateCreateSchema>;

export type ICandidateProfileUpdateApiArgs = IApiPut<ICandidateProfileUpdateSchema, ICandidateEntity["id"]>;
export type ICandidateOtherUpdateApiArgs = IApiPut<ICandidateOtherUpdateSchema, ICandidateEntity["id"]>;
export type ICandidateIdentityUpdateApiArgs = IApiPut<ICandidateIdentityUpdateSchema, ICandidateEntity["id"]>;

export type ICandidateDeleteApiArgs = IApiDelete<ICandidateEntity["id"]>;
