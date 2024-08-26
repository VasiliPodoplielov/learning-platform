import { useTranslation } from 'react-i18next';

import { Form } from './Form';
import styles from './styles.module.css';

export const FreeLesson = () => {
  const { t } = useTranslation();

  return (
    <div className="card">
      <div className="flex flex-column md:flex-row justify-content-between h-screen bg-black-alpha-50">
        <div
          className={`w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5 ${styles.bgFreeLesson}`}
        >
          <h2 className="text-6xl text-center">{t('freeLessons.titleFreeLessons')}</h2>
          <p className="text-3xl text-center">{t('freeLessons.tasksFreeLessons')}</p>
        </div>
        <Form />
      </div>
    </div>
  );
};
