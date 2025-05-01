import { HttpStatusCode } from "axios";

// ----------------------------------------------------------------------

export type IDataResponse<Response> = {
  data: Response;
};

export type INoDataResponse = {};

export type IPaginationResponse<Response> = Omit<
  IDataResponse<Response>,
  "data"
> & {
  data: Response[];
  meta: {
    isFirstPage: boolean;
    isLastPage: boolean;
    currentPage: number;
    previousPage?: number;
    nextPage?: number;
    pageCount: number;
    totalCount: number;
  };
};

export type IErrorResponse = {
  message: Array<{
    field: any;
    errors?: string[];
    children: IErrorResponse["message"];
  }>;
  error: string;
  statusCode: HttpStatusCode;
};

export type IErrorMapResponse = {
  message: string;
  fields: {
    field: any;
    message: string;
  }[];
};

export type IUnprocessableResponse = {
  message: string;
  error: string;
  statusCode: HttpStatusCode;
};
