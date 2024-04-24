import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useTranslation } from 'react-i18next';

import { Teacher } from './types';

interface Props {
  teacher: Teacher;
}

export const TeacherCard = ({ teacher }: Props) => {
  const { t } = useTranslation();
  const { imageUrl, name, language, introduction } = teacher;

  return (
    <Card
      title={name}
      subTitle={language}
      footer={<Button label={t('buttons.trialClass')} />}
      header={<img src={imageUrl} alt={'Teacher'} />}
      className="md:w-25rem"
    >
      <p className="m-0">{introduction}</p>
    </Card>
  );
};
