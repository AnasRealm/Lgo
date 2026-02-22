import { createClient, createConfig } from "@/lib/api/generated/client";
import { createClientConfig } from "@/lib/api/client";

// دالة مساعدة لإنشاء عميل يحمل التوكن
export function createAuthClient(accessToken: string) {
  return createClient(
    createClientConfig(
      createConfig({
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    ),
  );
}
