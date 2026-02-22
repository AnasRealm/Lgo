import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import { loadMessages } from "./messages";

const SUPPORTED_LOCALES = ["en", "ar"];
const DEFAULT_LOCALE = "ar";

export default getRequestConfig(async ({ requestLocale }) => {
  const cookieLocale = (await cookies()).get("NEXT_LOCALE")?.value;
  const headerLocale = (await headers())
    .get("accept-language")
    ?.split(",")[0]
    ?.split("-")[0];
  const resolvedReqLocale =
    typeof requestLocale === "string" ? requestLocale : await requestLocale;
  const candidateLocale = resolvedReqLocale || cookieLocale || headerLocale;
  const locale: string = SUPPORTED_LOCALES.includes(candidateLocale ?? "")
    ? (candidateLocale as string)
    : DEFAULT_LOCALE;

  const messages = await loadMessages(locale);
  return { locale, messages };
});
