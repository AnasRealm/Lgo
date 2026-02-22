// src/i18n/messages.ts
export async function loadMessages(locale: string) {
  const namespaces = [
    "common",
  ]; // list all namespaces you use
  const messages: Record<string, unknown> = {};

  for (const ns of namespaces) {
    const mod = await import(`./locales/${locale}/${ns}.json`);
    messages[ns] = mod.default;
  }

  return messages;
}
