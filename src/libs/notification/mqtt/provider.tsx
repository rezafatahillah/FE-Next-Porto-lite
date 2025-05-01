"use client";

import { createContext, useCallback, useEffect } from "react";

import { MQTT } from "./hook";
import { MQTTProviderProps } from "./type";
import { INotificationEntity } from "../entities";

// ----------------------------------------------------------------------

export const MQTTContext = createContext<INotificationEntity | null>(null);

export const MQTTConsumer = MQTTContext.Consumer;

// ----------------------------------------------------------------------

export function MQTTProvider({ children }: MQTTProviderProps) {
  const { connecting, payload } = MQTT();

  const onConnecting = useCallback(() => connecting(), []);

  useEffect(() => {
    onConnecting();
  }, []);

  return (
    <MQTTContext.Provider value={payload?.message || null}>
      {children}
    </MQTTContext.Provider>
  );
}
