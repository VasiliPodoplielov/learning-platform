import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IFormInput } from './types';
import { DEFAULT_VALUES } from './constants';

export const useValidationSchema = () => {
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('freeLessons.validation.textRequired')),
    phone: Yup.string()
      .required(t('freeLessons.validation.textRequired'))
      .matches(/^\d{2}-\d{6}$/, t('freeLessons.validation.textPhone')),
    email: Yup.string()
      .required(t('freeLessons.validation.textRequired'))
      .email(t('freeLessons.validation.textEmail') as string),
    accept: Yup.boolean().required(t('freeLessons.validation.textRequired')),
  });

  return validationSchema;
};

export const useFreeLesson = () => {
  const validationSchema = useValidationSchema();

  const form = useForm<IFormInput>({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(validationSchema),
  });

  return form;
};
