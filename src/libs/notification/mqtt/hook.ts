import mqtt, { ErrorWithReasonCode, IClientOptions, MqttClient } from "mqtt";
import { useEffect, useState } from "react";
import {
  IConnectionStatus,
  IMessagePayload,
  IPublishPayload,
  ISubscription,
  IUnsubscription,
} from "./type";
import { CONFIG } from "@/config-global";
import { useGetOwnSession } from "@/modules/authentication";
import { INotificationEntity, INotificationMessageEntity } from "../entities";

export function MQTT() {
  const [client, setClient] = useState<MqttClient | null>(null);
  const [connectStatus, setConnectStatus] =
    useState<IConnectionStatus>("Connect");
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [payload, setPayload] = useState<{
    topic: string;
    message: INotificationEntity;
  } | null>(null);

  const { profile } = useGetOwnSession();

  const configuration = (url?: string, mqttOption?: IClientOptions) => {
    const { mqtt } = CONFIG;

    const brokerUrl =
      url || `${mqtt.protocol}://${mqtt.host}:${mqtt.port}/mqtt`;

    return {
      brokerUrl,
      options: {
        clientId: mqttOption?.clientId || mqtt.clientId,
        username: mqttOption?.username || mqtt.username,
        password: mqttOption?.password || mqtt.password,
        clean: mqttOption?.clean || mqtt.clean,
        reconnectPeriod: mqttOption?.reconnectPeriod || mqtt.reconnectPeriod, // ms
        connectTimeout: mqttOption?.connectTimeout || mqtt.connectTimeout, // ms
      },
    };
  };

  const connecting = (url?: string, mqttOption?: IClientOptions) => {
    setConnectStatus("Connecting");

    const { brokerUrl, options } = configuration(url, mqttOption);

    setClient(mqtt.connect(brokerUrl, options));
  };

  const disconnecting = () => {
    if (client) {
      try {
        client.end(false, () => {
          setConnectStatus("Connect");
          console.log("disconnected successfully");
        });
      } catch (error) {
        console.log("disconnect error:", error);
      }
    }
  };

  const subscribing = ({ topic, opts }: ISubscription) => {
    if (client) {
      client.subscribe(topic, opts, (error) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }

        console.log(`Subscribe to topics: ${topic}`);
        setIsSubscribe(true);
      });
    }
  };

  const unsubscribing = ({ topic, opts }: IUnsubscription) => {
    if (client) {
      client.unsubscribe(topic, opts, (error?: Error | ErrorWithReasonCode) => {
        if (error) {
          console.log("Unsubscribe error", error);
          return;
        }

        console.log(`unsubscribed topic: ${topic}`);
        setIsSubscribe(false);
      });
    }
  };

  const publishing = ({ topic, message, opts }: IPublishPayload) => {
    if (client) {
      client.publish(
        topic,
        JSON.stringify({ data: message }),
        opts,
        (error) => {
          if (error) {
            console.log("Publish error: ", error);
          }
        }
      );
    }
  };

  useEffect(() => {
    if (profile) {
      const token = profile.notificationTokens.find((t) => t.type === "web");
      if (client && token) {
        subscribing({ topic: token.token });

        client.on("connect", () => {
          setConnectStatus("Connected");
          console.log("connection successful");
        });

        client.on("error", (err) => {
          console.error("Connection error: ", err);
          client.end();
        });

        client.on("reconnect", () => {
          setConnectStatus("Reconnecting");
        });

        client.on("message", (topic, payload) => {
          let message = JSON.parse(payload.toString());
          if (typeof message === "string") {
            message = JSON.parse(message);
          }

          setPayload({
            topic,
            message: message.data as INotificationEntity,
          });
          console.log(
            `received message: ${JSON.stringify(message)} from topic: ${topic}`
          );
        });
      }
    }
  }, [client, profile]);

  return {
    client,
    setClient,

    connectStatus,
    setConnectStatus,

    isSubscribe,
    setIsSubscribe,

    payload,
    setPayload,

    connecting,
    disconnecting,
    publishing,
    subscribing,
    unsubscribing,
  };
}
