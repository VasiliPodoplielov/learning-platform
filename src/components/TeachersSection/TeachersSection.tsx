import { Carousel } from 'primereact/carousel';
import { useTranslation } from 'react-i18next';

import { responsiveOptions } from './carouselResponsiveOptions';
import { teachersData } from './dataTeachers';
import { TeacherCard } from './TeacherCard';

export const TeachersSection = () => {
  const { t } = useTranslation();
  return (
    <div className="card bg-primary pt-5">
      <h2 className="text-6xl text-center">{t('TeachersSection.titleSection')}</h2>
      <Carousel
        value={teachersData(t)}
        numVisible={5}
        numScroll={5}
        circular={true}
        responsiveOptions={responsiveOptions}
        itemTemplate={(teacher) => <TeacherCard key={teacher.id} teacher={teacher} />}
      />
    </div>
  );
};
