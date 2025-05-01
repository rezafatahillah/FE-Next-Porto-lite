import { INotificationMessageEntity } from "./entities";

export type NotificationContextValue = INotificationMessageEntity | null;

export type NotificationProviderProps = {
  type: "mqtt" | "firebase";
  children: React.ReactNode;
};
