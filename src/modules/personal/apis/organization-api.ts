import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IOrganizationCreateApiArgs,
  IOrganizationDeleteApiArgs,
  IOrganizationGetAllApiArgs,
  IOrganizationGetAllResponse,
  IOrganizationGetDetailsApiArgs,
  IOrganizationGetDetailsResponse,
  IOrganizationUpdateApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class OrganizationApi {
  static getAll = async (args: IOrganizationGetAllApiArgs) => {
    const result = await axiosInstance.get<IOrganizationGetAllResponse>(
      endpoints.organization.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: IOrganizationGetDetailsApiArgs) => {
    const result = await axiosInstance.get<IOrganizationGetDetailsResponse>(
      endpoints.organization.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: IOrganizationCreateApiArgs) => {
    const result = await axiosInstance.post<IOrganizationGetDetailsResponse>(
      endpoints.organization.create,
      args.payload
    );

    return result.data;
  };

  static update = async (args: IOrganizationUpdateApiArgs) => {
    const result = await axiosInstance.patch<IOrganizationGetDetailsResponse>(
      endpoints.organization.update(args.id),
      args.payload
    );

    return result.data;
  };

  static delete = async (args: IOrganizationDeleteApiArgs) => {
    const result = await axiosInstance.delete<IOrganizationGetDetailsResponse>(
      endpoints.organization.delete(args.id)
    );

    return result.data;
  };
}
