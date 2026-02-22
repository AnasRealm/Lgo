import type { AxiosRequestConfig } from "axios";
import { api } from "./axios";
// import { url } from "inspector/promises";

export const mutator = async (
  url: string,
  method: string,
  data?: unknown,
  config?: AxiosRequestConfig,
) => {
  try {
    const response = await api.request({ url, method, data, ...config });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
    