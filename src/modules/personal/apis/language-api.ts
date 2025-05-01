import { axiosInstance, endpoints } from "@/libs/axios";

import {
  ILanguageCreateApiArgs,
  ILanguageDeleteApiArgs,
  ILanguageGetAllApiArgs,
  ILanguageGetAllResponse,
  ILanguageGetDetailsApiArgs,
  ILanguageGetDetailsResponse,
  ILanguageUpdateApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class LanguageApi {
  static getAll = async (args: ILanguageGetAllApiArgs) => {
    const result = await axiosInstance.get<ILanguageGetAllResponse>(
      endpoints.language.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: ILanguageGetDetailsApiArgs) => {
    const result = await axiosInstance.get<ILanguageGetDetailsResponse>(
      endpoints.language.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: ILanguageCreateApiArgs) => {
    const result = await axiosInstance.post<ILanguageGetDetailsResponse>(
      endpoints.language.create,
      args.payload
    );

    return result.data;
  };

  static update = async (args: ILanguageUpdateApiArgs) => {
    const result = await axiosInstance.patch<ILanguageGetDetailsResponse>(
      endpoints.language.update(args.id),
      args.payload
    );

    return result.data;
  };

  static delete = async (args: ILanguageDeleteApiArgs) => {
    const result = await axiosInstance.delete<ILanguageGetDetailsResponse>(
      endpoints.language.delete(args.id)
    );

    return result.data;
  };
}
