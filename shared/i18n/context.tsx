"use client";

import { ReactNode, useState, useCallback, useEffect } from "react";
import { NextIntlClientProvider } from "next-intl";
import { loadMessages } from "./messages";
import { setLocaleAction } from "./actions";

type Props = {
  children: ReactNode;
  initialLocale: string;
  initialMessages: Record<string, unknown>;
};

declare global {
  interface Window {
    changeLocale?: (locale: string) => Promise<void>;
  }
}

export function DynamicIntlProvider({
  children,
  initialLocale,
  initialMessages,
}: Props) {
  const [locale, setLocale] = useState(initialLocale);
  const [messages, setMessages] = useState(initialMessages);

  const changeLocale = useCallback(
    async (newLocale: string) => {
      if (newLocale === locale) return;

      const newMessages = await loadMessages(newLocale);
      setLocale(newLocale);
      setMessages(newMessages);

      // Update server-side cookie using a Server Action
      await setLocaleAction(newLocale);
    },
    [locale]
  );

  // Expose for client switcher
  useEffect(() => {
    window.changeLocale = changeLocale;
    return () => {
      delete window.changeLocale;
    };
  }, [changeLocale]);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
