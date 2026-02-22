import type { CreateClientConfig } from "./generated/client";

export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  // هنا تضع الرابط الأساسي للباك إند، يفضل جلبه من متغيرات البيئة
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "https://api.your-project.com",
});
