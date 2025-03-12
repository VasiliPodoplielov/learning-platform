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
    accept: Yup.boolean().required(t(TEXT_REQUIRED)),
  });

  const form = useForm<IFormInput>({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: IFormInput) => {
    try {
      const response = await fetch('http://localhost:3001/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        alert('Форма успішно надіслана!');
      } else {
        alert('Помилка відправки форми');
      }
    } catch (error) {
      alert('Сталася помилка');
    }
  };

  return {
    form,
    onSubmit,
  };
};
