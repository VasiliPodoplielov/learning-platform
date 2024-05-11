import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { InputText, InputNumber } from 'primereact/inputtext';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { IFormInput } from './types';

export const Form = () => {
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('freeLessons.validation.textRequired') as string),
    phone: Yup.number().required(t('freeLessons.validation.textRequired') as string),
    email: Yup.string()
      .required(t('freeLessons.validation.textRequired') as string)
      .email(t('freeLessons.validation.textEmail') as string),
    accept: Yup.boolean(),
  });

  const form = useForm<IFormInput>({
    defaultValues: {
      name: '',
      phone: 0,
      email: '',
      accept: false,
    },
    resolver: yupResolver(validationSchema),
  });

  const { control, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const onSubmit = (data: IFormInput) => {
    console.log(data);
    reset();
  };

  return (
    <div className="styles.form-demo">
      <div className="flex justify-content-center">
        <div className="card">
          <h5 className="text-center">{t('freeLessons.titleForm')}</h5>
          <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      {...field}
                      className={fieldState.invalid ? 'p-invalid' : ''}
                    />
                  )}
                />
                <label htmlFor="name" className={errors.name ? 'p-error' : ''}>
                  {t('freeLessons.formInput.name')}
                </label>
              </span>
              {errors.name && <small className="p-error">{errors.name.message}</small>}
            </div>
            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      {...field}
                      className={fieldState.invalid ? 'p-invalid' : ''}
                    />
                  )}
                />
                <label htmlFor="email" className={errors.email ? 'p-error' : ''}>
                  {t('freeLessons.formInput.email')}
                </label>
              </span>
              {errors.email && <small className="p-error">{errors.email.message}</small>}
            </div>
            <div className="field">
              <span className="p-float-label">
                <Controller
                  name="phone"
                  control={control}
                  render={({ field, fieldState }) => (
                    <InputNumber
                      id={field.name}
                      {...field}
                      className={fieldState.invalid ? 'p-invalid' : ''}
                    />
                  )}
                />
                <label htmlFor="phone" className={errors.phone ? 'p-error' : ''}>
                  {t('freeLessons.formInput.phone')}
                </label>
              </span>
              {errors.phone && <small className="p-error">{errors.phone.message}</small>}
            </div>
            <div className="field-checkbox">
              <Controller
                name="accept"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    inputId={field.name}
                    onChange={(e) => field.onChange(e.checked)}
                    checked={field.value}
                  />
                )}
              />
              <label htmlFor="accept" className={errors.accept ? 'p-error' : ''}>
                {t('freeLessons.formInput.accept')}
              </label>
              {errors.accept && <small className="p-error">{errors.accept.message}</small>}
            </div>

            <Button type="submit" label={t('freeLessons.labelButton')} className="mt-2" />
          </form>
        </div>
      </div>
    </div>
  );
};
