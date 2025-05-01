import packageJson from "../package.json";
import { paths } from "./utils/routes";

// ----------------------------------------------------------------------

export const CONFIG = {
  site: {
    name: "Next Boilerplate",
    serverUrl: process.env.NEXT_PUBLIC_SERVER_URL ?? "",
    assetURL: process.env.NEXT_PUBLIC_ASSET_URL ?? "",
    basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
    version: packageJson.version,
  },
  isStaticExport: process.env.BUILD_STATIC_EXPORT
    ? JSON.parse(`${process.env.BUILD_STATIC_EXPORT}`)
    : null,
  /**
   * Auth
   */
  auth: {
    method: "jwt",
    redirectPath: paths.backOffice.root,
  },
  /**
   * Next Auth
   */
  nextAuth: {
    apiKey: process.env.NEXTAUTH_URL ?? "",
    secret: process.env.NEXTAUTH_SECRET ?? "",
    expiresIn: parseInt(process.env.NEXTAUTH_EXPIRE || "3600"),
  },
  map: {
    mapboxApiKey: "",
  },
  mqtt: {
    host: process.env.NEXT_PUBLIC_MQTT_HOST,
    protocol: process.env.NEXT_PUBLIC_MQTT_PROTOCOL,
    clientId: "mqtt_" + Math.random().toString(16).substring(2, 8),
    port: process.env.NEXT_PUBLIC_MQTT_PORT,
    username: process.env.NEXT_PUBLIC_MQTT_USER,
    password: process.env.NEXT_PUBLIC_MQTT_PASSWORD,
    clean: true,
    reconnectPeriod: 1000, // ms
    connectTimeout: 30 * 1000, // ms
  },
};
