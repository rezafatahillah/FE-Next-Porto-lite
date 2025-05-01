import { axiosInstance, endpoints } from "@/libs/axios";

import {
  ISkillCommonCreateApiArgs,
  ISkillCommonDeleteApiArgs,
  ISkillCommonGetAllApiArgs,
  ISkillCommonGetAllResponse,
  ISkillCommonGetDetailsApiArgs,
  ISkillCommonGetDetailsResponse,
  ISkillCommonUpdateApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class SkillCommonApi {
  static getAll = async (args: ISkillCommonGetAllApiArgs) => {
    const result = await axiosInstance.get<ISkillCommonGetAllResponse>(
      endpoints.skillcommon.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: ISkillCommonGetDetailsApiArgs) => {
    const result = await axiosInstance.get<ISkillCommonGetDetailsResponse>(
      endpoints.skillcommon.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: ISkillCommonCreateApiArgs) => {
    const result = await axiosInstance.post<ISkillCommonGetDetailsResponse>(
      endpoints.skillcommon.create,
      args.payload
    );

    return result.data;
  };

  static update = async (args: ISkillCommonUpdateApiArgs) => {
    const result = await axiosInstance.patch<ISkillCommonGetDetailsResponse>(
      endpoints.skillcommon.update(args.id),
      args.payload
    );

    return result.data;
  };

  static delete = async (args: ISkillCommonDeleteApiArgs) => {
    const result = await axiosInstance.delete<ISkillCommonGetDetailsResponse>(
      endpoints.skillcommon.delete(args.id)
    );

    return result.data;
  };
}
