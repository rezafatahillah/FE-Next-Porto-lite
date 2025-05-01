import { axiosInstance, endpoints } from "@/libs/axios";

import {
  ICandidateGetAllApiArgs,
  ICandidateGetAllResponse,
  ICandidateGetDetailsApiArgs,
  ICandidateGetDetailsResponse,
  ICandidateProfileUpdateApiArgs,
  ICandidateIdentityUpdateApiArgs,
  ICandidateOtherUpdateApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class CandidateApi {
  static getAll = async (args: ICandidateGetAllApiArgs) => {
    const result = await axiosInstance.get<ICandidateGetAllResponse>(
      endpoints.candidate.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: ICandidateGetDetailsApiArgs) => {
    const result = await axiosInstance.get<ICandidateGetDetailsResponse>(
      endpoints.candidate.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static updateProfile = async (args: ICandidateProfileUpdateApiArgs) => {
    const result = await axiosInstance.patch<ICandidateGetDetailsResponse>(
      endpoints.candidate.update(args.id),
      args.payload
    );

    return result.data;
  };

  static updateIdentity = async (args: ICandidateIdentityUpdateApiArgs) => {
    const result = await axiosInstance.patch<ICandidateGetDetailsResponse>(
      endpoints.candidate.update(args.id),
      args.payload
    );

    return result.data;
  };

  static updateOther = async (args: ICandidateOtherUpdateApiArgs) => {
    const result = await axiosInstance.patch<ICandidateGetDetailsResponse>(
      endpoints.candidate.update(args.id),
      args.payload
    );

    return result.data;
  };

}
