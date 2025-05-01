import { axiosInstance, endpoints } from "@/libs/axios";

import {
  ISkillLevelCreateApiArgs,
  ISkillLevelDeleteApiArgs,
  ISkillLevelGetAllApiArgs,
  ISkillLevelGetAllResponse,
  ISkillLevelGetDetailsApiArgs,
  ISkillLevelGetDetailsResponse,
  ISkillLevelUpdateApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class SkillLevelApi {
  static getAll = async (args: ISkillLevelGetAllApiArgs) => {
    const result = await axiosInstance.get<ISkillLevelGetAllResponse>(
      endpoints.skilllevel.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: ISkillLevelGetDetailsApiArgs) => {
    const result = await axiosInstance.get<ISkillLevelGetDetailsResponse>(
      endpoints.skilllevel.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: ISkillLevelCreateApiArgs) => {
    const result = await axiosInstance.post<ISkillLevelGetDetailsResponse>(
      endpoints.skilllevel.create,
      args.payload
    );

    return result.data;
  };

  static update = async (args: ISkillLevelUpdateApiArgs) => {
    const result = await axiosInstance.patch<ISkillLevelGetDetailsResponse>(
      endpoints.skilllevel.update(args.id),
      args.payload
    );

    return result.data;
  };

  static delete = async (args: ISkillLevelDeleteApiArgs) => {
    const result = await axiosInstance.delete<ISkillLevelGetDetailsResponse>(
      endpoints.skilllevel.delete(args.id)
    );

    return result.data;
  };
}
