import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { useTranslation } from 'react-i18next';

import sharedStyles from '../styles/sharedStyles.module.css';
import {
  CAROUSEL_SCROLL_ITEMS_COUNT,
  CAROUSEL_VISIBLE_ITEMS_COUNT,
  RESPONSIVE_OPTIONS,
} from './constants';
import { getTeachers } from './dataHelpers';
import styles from './styles.module.css';
import { TeacherCard } from './TeacherCard';

export const Teachers = () => {
  const { t } = useTranslation();
  return (
    <div className={`p-0 h-screen ${styles.bgTeachersLesson} sm:p-5 md:p-8 overflow-hidden`}>
      <div className="border-noround sm:border-round-3xl border-round-3xl  flex flex-column lg:flex-row h-full m-10 ">
        <div
          className={`border-noround  sm:border-round-top  flex flex-column p-2 surface-800 justify-content-center align-items-stretch lg:border-round-left-3xl lg:border-noround-right  ${styles.flexBasis35} bg-yellow-50`}
        >
          <h2 className="text-6xl text-center text-black-alpha-90">
            {t('teachersSection.titleSection')}
          </h2>
          <p className="text-black-alpha-90 text-3xl text-center">
            {t('teachersSection.subTitleInfo')}
          </p>
          <Button
            className={`mt-2 uppercase ${sharedStyles.letterSpacing_02}`}
            label={t('teachersSection.buttons.signUpClass')}
          />
        </div>
        <div
          className={`flex flex-column p-2 justify-content-center align-content-center bg-bluegray-900 sm:border-round-bottom-3xl lg:border-round-right-3xl lg:border-noround-left ${styles.flexBasis65}`}
        >
          <Carousel
            value={getTeachers(t)}
            numVisible={CAROUSEL_VISIBLE_ITEMS_COUNT}
            numScroll={CAROUSEL_SCROLL_ITEMS_COUNT}
            circular={true}
            responsiveOptions={RESPONSIVE_OPTIONS}
            itemTemplate={(teacher) => <TeacherCard key={teacher.id} teacher={teacher} />}
          />
        </div>
      </div>
    </div>
  );
};
