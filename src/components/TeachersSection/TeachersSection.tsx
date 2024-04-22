import { Carousel } from 'primereact/carousel';
import { useTranslation } from 'react-i18next';

import { TeacherCard } from './TeacherCard';
import { teachersData } from './dataTeachers';
import { responsiveOptions } from './carouselResponsiveOptions';

export const TeachersSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="card bg-primary pt-5">
      <h2 className="text-6xl text-center">{t('TeachersSection.titleSection')}</h2>
      <Carousel
        value={teachersData(i18n.getFixedT(i18n.languages[0]))}
        numVisible={5}
        numScroll={5}
        circular={true}
        responsiveOptions={responsiveOptions}
        itemTemplate={(teacher) => (
          <TeacherCard
            key={teacher.id}
            teacher={teacher}
            getTranslation={i18n.getFixedT(i18n.languages[0])}
          />
        )}
      />
    </div>
  );
};
