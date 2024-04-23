import { Carousel } from 'primereact/carousel';
import { useTranslation } from 'react-i18next';

import { responsiveOptions } from './carouselResponsiveOptions';
import { getTeachers } from './dataTeachers';
import { TeacherCard } from './TeacherCard';

export const Teachers = () => {
  const { t } = useTranslation();
  return (
    <div className="card bg-primary pt-5">
      <h2 className="text-6xl text-center">{t('teachersSection.titleSection')}</h2>
      <Carousel
        value={getTeachers(t)}
        numVisible={5}
        numScroll={5}
        circular={true}
        responsiveOptions={responsiveOptions}
        itemTemplate={(teacher) => <TeacherCard key={teacher.id} teacher={teacher} />}
      />
    </div>
  );
};
