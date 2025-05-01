import { axiosInstance, endpoints } from "@/libs/axios";

import {
  IMedicalQuestionCreateApiArgs,
  IMedicalQuestionDeleteApiArgs,
  IMedicalQuestionGetAllApiArgs,
  IMedicalQuestionGetAllResponse,
  IMedicalQuestionGetDetailsApiArgs,
  IMedicalQuestionGetDetailsResponse,
  IMedicalQuestionUpdateApiArgs,
} from "../entities";

// ----------------------------------------------------------------------

export class MedicalQuestionApi {
  static getAll = async (args: IMedicalQuestionGetAllApiArgs) => {
    const result = await axiosInstance.get<IMedicalQuestionGetAllResponse>(
      endpoints.medicalquestion.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getAllCustom = async (args: IMedicalQuestionGetAllApiArgs) => {
    const result = await axiosInstance.get<IMedicalQuestionGetAllResponse>(
      endpoints.medicalquestion.getAllCustom,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getDetails = async (args: IMedicalQuestionGetDetailsApiArgs) => {
    const result = await axiosInstance.get<IMedicalQuestionGetDetailsResponse>(
      endpoints.medicalquestion.getDetails(args.id),
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static create = async (args: IMedicalQuestionCreateApiArgs) => {
    const result = await axiosInstance.post<IMedicalQuestionGetDetailsResponse>(
      endpoints.medicalquestion.create,
      args.payload
    );

    return result.data;
  };

  static update = async (args: IMedicalQuestionUpdateApiArgs) => {
    const result = await axiosInstance.patch<IMedicalQuestionGetDetailsResponse>(
      endpoints.medicalquestion.update(args.id),
      args.payload
    );

    return result.data;
  };

  static delete = async (args: IMedicalQuestionDeleteApiArgs) => {
    const result = await axiosInstance.delete<IMedicalQuestionGetDetailsResponse>(
      endpoints.medicalquestion.delete(args.id)
    );

    return result.data;
  };
}
