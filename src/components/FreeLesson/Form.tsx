import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.css';
import { useFreeLesson } from './useFreeLesson';

export const Form = () => {
  const { t } = useTranslation();

  const { form, onSubmit } = useFreeLesson();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
      <div className="styles.form-demo">
        <div className="flex justify-content-center">
          <div className="card min-w-450 md:w-9 sm:w-full">
            <h1 className="text-center">{t('freeLessons.titleForm')}</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="p-fluid mt-5">
              <div className="field mt-5">
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
              <div className="field mt-5">
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
              <div className="field mt-5">
                <span className="p-float-label">
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field, fieldState }) => (
                      <span className="p-float-label">
                        <InputMask
                          value={field.value}
                          onChange={(e) => field.onChange(e.target.value)}
                          mask="+99-999-999-999"
                          placeholder="99-99999999"
                          id={field.name}
                          className={fieldState.invalid ? 'p-invalid' : ''}
                        />
                        <label htmlFor="phone" className={errors.phone ? 'p-error' : ''}>
                          {t('freeLessons.formInput.phone')}
                        </label>
                      </span>
                    )}
                  />
                  {errors.phone && <small className="p-error">{errors.phone.message}</small>}
                </span>
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
              <Button
                type="submit"
                label={t('freeLessons.labelButton')}
                className={`mt-2 uppercase ${styles.letterSpacing_2}`}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
