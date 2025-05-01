import {
  IApiGet,
  IApiPost,
  IApiPut,
  IDataResponse,
  IDefaultParams,
  IPaginationResponse,
} from "@/utils/entities";

// ----------------------------------------------------------------------

export type INotificationStatisticEntity = {
  count: {
    all: number;
    unread: number;
    read: number;
  };
};

export type INotificationMessageEntity = {
  id: string;
  type: string;
  title: string;
  category: string;
  isUnRead: boolean;
  avatarUrl: string | null;
  createdAt: string | number | null;
};

export type INotificationEntity = {
  id: number;
  service: string;
  type: string;
  notifiableType: string;
  notifiableId: string;
  data: {
    data: INotificationMessageEntity;
  };
  sentAt: string;
  readAt: string | null;
  createdAt: string;
  updatedAt: string;
};

// ----------------------------------------------------------------------

export type INotificationGetAllResponse =
  IPaginationResponse<INotificationEntity>;

export type INotificationGetStatisticResponse =
  IDataResponse<INotificationStatisticEntity>;

export type INotificationGetStatsParams = {};

export type INotificationGetAllParams = IDefaultParams & {};

// ----------------------------------------------------------------------

export type INotificationGetStatsApiArgs = IApiGet<INotificationGetStatsParams>;

export type INotificationGetAllApiArgs = IApiGet<INotificationGetAllParams>;

export type INotificationReadAllApiArgs = IApiPost<null>;

export type INotificationReadApiArgs = IApiPut<null, INotificationEntity["id"]>;
