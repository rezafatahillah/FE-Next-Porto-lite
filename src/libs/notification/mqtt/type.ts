import {
  IClientPublishOptions,
  IClientSubscribeOptions,
  IClientSubscribeProperties,
  IClientUnsubscribeProperties,
  ISubscriptionMap,
} from "mqtt";
import { INotificationMessageEntity } from "../entities";

export type IQosOption = { label: string; value: number };

export type IConnectionStatus =
  | "Connect"
  | "Connecting"
  | "Connected"
  | "Reconnecting";

export type IConnectionProtocol = "ws" | "wss";

export type IPublishPayload = {
  topic: string;
  message: INotificationMessageEntity | Buffer;
  opts?: IClientPublishOptions;
};

export type ISubscription = {
  topic: string | string[] | ISubscriptionMap;
  opts?: IClientSubscribeOptions | IClientSubscribeProperties;
};

export type IUnsubscription = {
  topic: string | string[];
  opts?: IClientUnsubscribeProperties;
};

export type IMessagePayload = {
  topic: string;
  message: INotificationMessageEntity;
};

export type MQTTProviderProps = {
  children: React.ReactNode;
};
