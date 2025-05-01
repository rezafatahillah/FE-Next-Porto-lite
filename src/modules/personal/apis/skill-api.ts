import { axiosInstance, endpoints } from "@/libs/axios";

import {
  ISkillCreateApiArgs,
  ISkillDeleteApiArgs,
  ISkillGetAllApiArgs,
  ISkillGetAllResponse,
  ISkillGetDetailsApiArgs,
  ISkillGetDetailsResponse,
  ISkillUpdateApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class SkillApi {
  static getAll = async (args: ISkillGetAllApiArgs) => {
    const result = await axiosInstance.get<ISkillGetAllResponse>(
      endpoints.skill.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: ISkillGetDetailsApiArgs) => {
    const result = await axiosInstance.get<ISkillGetDetailsResponse>(
      endpoints.skill.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: ISkillCreateApiArgs) => {
    const result = await axiosInstance.post<ISkillGetDetailsResponse>(
      endpoints.skill.create,
      args.payload
    );

    return result.data;
  };

  static update = async (args: ISkillUpdateApiArgs) => {
    const result = await axiosInstance.patch<ISkillGetDetailsResponse>(
      endpoints.skill.update(args.id),
      args.payload
    );

    return result.data;
  };

  static delete = async (args: ISkillDeleteApiArgs) => {
    const result = await axiosInstance.delete<ISkillGetDetailsResponse>(
      endpoints.skill.delete(args.id)
    );

    return result.data;
  };
}
