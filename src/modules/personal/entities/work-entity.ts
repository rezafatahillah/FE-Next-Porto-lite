import {
  IApiDelete,
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";
import { IWorkCreateSchema, IWorkUpdateSchema } from "../schemes";

// ----------------------------------------------------------------------

export type IWorkEntity = {
  id: number;
  stillWorking: boolean,
  companyName: string,
  position: string,
  supervisor: string,
  start: string,
  end: string,
  salary: number,
  jobdesk: string,
  reason: string,
  
  createdAt?: string;
  updatedAt?: string;
};

// ----------------------------------------------------------------------

export type IWorkGetAllResponse = IPaginationResponse<IWorkEntity>;

export type IWorkGetAllParams = IDefaultParams & {
  account?: boolean;
};

export type IWorkGetDetailsResponse = IDataResponse<IWorkEntity>;

export type IWorkGetDetailsParams = {};

// ----------------------------------------------------------------------

export type IWorkGetAllApiArgs = IApiGet<IWorkGetAllParams>;

export type IWorkGetDetailsApiArgs = IApiGet<IWorkGetDetailsParams> & {
  id: IWorkEntity["id"];
};

export type IWorkCreateApiArgs = IApiPost<IWorkCreateSchema>;

export type IWorkUpdateApiArgs = IApiPut<IWorkUpdateSchema, IWorkEntity["id"]>;

export type IWorkDeleteApiArgs = IApiDelete<IWorkEntity["id"]>;
