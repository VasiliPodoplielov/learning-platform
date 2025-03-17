import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { DEFAULT_VALUES, TEXT_REQUIRED } from './constants';
import { IFormInput } from './types';

export const useContactForm = () => {
  const { t } = useTranslation();

  const phoneRegExp = /^\+[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{3}$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t(TEXT_REQUIRED)),
    phone: Yup.string()
      .required(t(TEXT_REQUIRED))
      .matches(phoneRegExp, 'Phone number is not valid'),
    email: Yup.string().required(t(TEXT_REQUIRED)).email(t('freeLessons.validation.textEmail')),
    accept: Yup.boolean().oneOf([true], t(TEXT_REQUIRED)),
  });

  const form = useForm<IFormInput>({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(validationSchema),
  });

  const telegramBotToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const telegramChatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
  const telegramURL = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

  const onSubmit = async (data: IFormInput) => {
    try {
      const text = `📩 *Нова заявка*\n\n👤 *Ім'я:* ${data.name}\n📧 *Email:* ${data.email}\n📞 *Телефон:* ${data.phone}\n✅ *Згода:* ${data.accept ? 'Так' : 'Ні'}`;

      const response = await fetch(telegramURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: text,
          parse_mode: 'HTML',
        }),
      });

      if (!response.ok) throw new Error('Failed to send');

      alert('Message sent successfully to Telegram!');
      form.reset();
    } catch (error) {
      alert('Failed to send message.');
      console.error('Telegram Error:', error);
    }
  };

  return {
    form,
    onSubmit,
  };
};
