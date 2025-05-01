import {
  IHookQueryGet,
  IHookQueryInfinite,
  IHookQueryMutation,
  INoDataResponse,
} from "@/utils/entities";
import {
  INotificationGetAllApiArgs,
  INotificationGetAllResponse,
  INotificationGetStatisticResponse,
  INotificationGetStatsApiArgs,
  INotificationReadAllApiArgs,
  INotificationReadApiArgs,
} from "../entities";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { NotificationApi } from "../apis";

// ----------------------------------------------------------------------

export class NotificationQuery {
  static useStatistic = (
    args: IHookQueryGet<
      INotificationGetStatsApiArgs,
      INotificationGetStatisticResponse
    >
  ) => {
    return useQuery({
      queryKey: ["NotificationQuery-getStatistic", args.props],
      queryFn: () => NotificationApi.getStatistic(args.props),
      ...args.options,
    });
  };

  static useGetAll = (
    args: IHookQueryGet<INotificationGetAllApiArgs, INotificationGetAllResponse>
  ) => {
    return useQuery({
      queryKey: ["NotificationQuery-getAll", args.props],
      queryFn: () => NotificationApi.getAll(args.props),
      ...args.options,
    });
  };

  static useInfiniteGetAll = (
    args: IHookQueryInfinite<
      INotificationGetAllApiArgs,
      INotificationGetAllResponse
    >
  ) => {
    return useInfiniteQuery({
      queryKey: ["NotificationQuery-infinite-getAll", args.props],
      queryFn: ({ pageParam = 1 }) =>
        NotificationApi.getAll({
          ...args.props,
          params: {
            ...args.props?.params,
            page: pageParam,
          },
        }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.meta.nextPage,
      ...args.options,
    });
  };

  static useReadAll = (
    args: IHookQueryMutation<INotificationReadAllApiArgs, INoDataResponse>
  ) => {
    return useMutation({
      mutationKey: ["NotificationQuery-readAll"],
      mutationFn: NotificationApi.readAll,
      ...args.options,
    });
  };

  static useRead = (
    args: IHookQueryMutation<INotificationReadApiArgs, INoDataResponse>
  ) => {
    return useMutation({
      mutationKey: ["NotificationQuery-read"],
      mutationFn: NotificationApi.read,
      ...args.options,
    });
  };

  static useDeleteAll = (args: IHookQueryMutation<null, INoDataResponse>) => {
    return useMutation({
      mutationKey: ["NotificationQuery-deleteAll"],
      mutationFn: NotificationApi.deleteAll,
      ...args.options,
    });
  };
}
