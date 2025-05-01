import axios, { AxiosError, AxiosResponse } from "axios";

import { CONFIG } from "@/config-global";
import { getOwnServerSession } from "@/modules/authentication";
import { signOut } from "next-auth/react";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: CONFIG.site.serverUrl,
});

axiosInstance.interceptors.request.use(async (config) => {
  const newConfig = { ...config };

  const { getBearerToken } = await getOwnServerSession();
  newConfig.headers.Authorization = getBearerToken;

  return newConfig;
});

axiosInstance.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const status = error.response?.status;

    if (status === 500) {
      throw {
        error: "Something went wrong",
        statusCode: 500,
      };
    } else if (status === 401) {
      signOut();
    }

    throw error.response?.data;
  }
);

export default axiosInstance;
