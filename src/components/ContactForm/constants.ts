export const DEFAULT_VALUES = {
  name: '',
  phone: '',
  email: '',
  accept: false,
};
export const telegramBotToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
export const telegramChatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
export const telegramURL = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
