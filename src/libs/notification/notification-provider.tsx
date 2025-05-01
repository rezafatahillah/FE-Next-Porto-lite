"use client";

import { NotificationProviderProps } from "./type";

import { MQTTProvider } from "./mqtt/provider";

// ----------------------------------------------------------------------

export function NotificationProvider({
  type,
  children,
}: NotificationProviderProps) {
  if (type === "mqtt") {
    return <MQTTProvider>{children}</MQTTProvider>;
  }
}
