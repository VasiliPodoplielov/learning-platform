import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { DEFAULT_VALUES, TEXT_REQUIRED } from './constants';
import { IFormInput } from './types';

export const useFreeLesson = () => {
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
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, String(data[key as keyof IFormInput]));
      });

      const response = await fetch('sendmessage.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        form.reset();
        alert('Form sent successfully!');
      } else {
        alert('Error sending form');
      }
    } catch (error) {
      alert('An error occurred');
    }
  };

  return {
    form,
    onSubmit,
  };
};
