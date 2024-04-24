import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useTranslation } from 'react-i18next';

import { Teacher } from './types';

interface Props {
  teacher: Teacher;
}

export const TeacherCard = ({ teacher }: Props) => {
  const { t } = useTranslation();
  const { image, name, language, introduction } = teacher;
  const { url: imageUrl } = image;
  const imageAltText = 'Teacher image';

  return (
    <Card
      title={name}
      subTitle={language}
      footer={<Button label={t('buttons.trialClass')} />}
      header={<img src={imageUrl} alt={imageAltText} />}
      className="md:w-25rem"
    >
      <p className="m-0">{introduction}</p>
    </Card>
  );
};
