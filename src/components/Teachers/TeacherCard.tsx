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
      header={<img src={imageUrl} alt={'Teacher'} className="w-8 md:w-full" />}
      className="border-1 surface-border border-round m-2 py-3 px-3 text-center"
    >
      <p className="m-0 text-left">{introduction}</p>
    </Card>
  );
};
