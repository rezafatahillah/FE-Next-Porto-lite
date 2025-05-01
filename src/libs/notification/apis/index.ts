import { axiosInstance, endpoints } from "@/libs/axios";
import {
  INotificationGetAllApiArgs,
  INotificationGetAllResponse,
  INotificationGetStatisticResponse,
  INotificationGetStatsApiArgs,
  INotificationReadAllApiArgs,
  INotificationReadApiArgs,
} from "../entities";
import { INoDataResponse } from "@/utils/entities";

// ----------------------------------------------------------------------

export class NotificationApi {
  static getStatistic = async (args: INotificationGetStatsApiArgs) => {
    const result = await axiosInstance.get<INotificationGetStatisticResponse>(
      endpoints.notification.statistic,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static getAll = async (args: INotificationGetAllApiArgs) => {
    const result = await axiosInstance.get<INotificationGetAllResponse>(
      endpoints.notification.getAll,
      {
        params: args.params,
      }
    );

    return result.data;
  };

  static readAll = async (args: INotificationReadAllApiArgs) => {
    const result = await axiosInstance.patch<INoDataResponse>(
      endpoints.notification.readAll,
      args.payload
    );

    console.log(result);

    return result.data;
  };

  static read = async (args: INotificationReadApiArgs) => {
    const result = await axiosInstance.patch<INoDataResponse>(
      endpoints.notification.read(args.id),
      args.payload
    );

    console.log(result);

    return result.data;
  };

  static deleteAll = async () => {
    const result = await axiosInstance.delete<INoDataResponse>(
      endpoints.notification.readAll
    );

    return result.data;
  };
}
