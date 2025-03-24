import { yupResolver } from '@hookform/resolvers/yup';
import { Resolver, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { DEFAULT_VALUES, telegramChatId, telegramURL } from './constants';
import { IFormInput, Toast } from './types';
import { getApplicationMessage } from './dataHelpers';
import { useRef } from 'react';

export const useContactForm = () => {
  const { t } = useTranslation();
  const toast = useRef<Toast>(null);

  const phoneRegExp = /^\+[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{3}$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('freeLessons.validation.textRequired')),
    phone: Yup.string()
      .required(t('freeLessons.validation.textRequired'))
      .matches(phoneRegExp, 'Phone number is not valid'),
    email: Yup.string()
      .required(t('freeLessons.validation.textRequired'))
      .email(t('freeLessons.validation.textEmail')),
    accept: Yup.boolean().oneOf([true], t('freeLessons.validation.textRequired')),
  });

  const form = useForm<IFormInput>({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(validationSchema) as unknown as Resolver<IFormInput>,
  });

  const onSubmit = async (data: IFormInput) => {
    try {
      const response = await fetch(telegramURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: getApplicationMessage(data),
          parse_mode: 'HTML',
        }),
      });

      if (!response.ok) throw new Error('Failed to send');

      toast.current?.show({
        severity: 'success',
        summary: 'Success',
        detail: 'Message sent successfully!',
        life: 3000,
      });
      form.reset();
    } catch (error) {
      toast.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to send message.',
        life: 3000,
      });
      console.error('Telegram Error:', error);
    }
  };

  return { form, onSubmit, toast };
};
