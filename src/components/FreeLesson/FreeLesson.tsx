import { useTranslation } from 'react-i18next';

import { Form } from './Form';

export const FreeLesson = () => {
  const { t } = useTranslation();

  return (
    <div className="card bg-primary surface-500">
      <div className="flex flex-column md:flex-row justify-content-between bg-primary">
        <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
          <h2 className="text-6xl text-center">{t('freeLessons.titleFreeLessons')}</h2>
          <ul>
            <li>{t('freeLessons.tasksFreeLessons.one')}</li>
            <li>{t('freeLessons.tasksFreeLessons.two')}</li>
            <li>{t('freeLessons.tasksFreeLessons.three')}</li>
          </ul>
        </div>
        <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
          <Form />
        </div>
      </div>
    </div>
  );
};
