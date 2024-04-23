import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useTranslation } from 'react-i18next';

import { Teacher } from './types';

export const TeacherCard = ({ teacher }: { teacher: Teacher }) => {
  const { t } = useTranslation();
  const { url: imageUrl } = teacher.image;
  const imageAltText = 'Teacher image';

  return (
    <Card
      title={teacher.name}
      subTitle={teacher.language}
      footer={<Button label={t('buttons.trialClass')} />}
      header={<img src={imageUrl} alt={imageAltText} />}
      className="md:w-25rem"
    >
      <p className="m-0">{teacher.introduction}</p>
    </Card>
  );
};
