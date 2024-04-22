import { useTranslation } from 'react-i18next';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export const TeacherCard = ({ teacher }: any) => {
  const { t } = useTranslation();

  const header = <img src={teacher.image.url} alt={teacher.image.altText} />;
  const footer = (
    <>
      <Button label={t('buttons.trialClass')} />
    </>
  );

  return (
    <div className="card flex justify-content-center">
      <Card
        title={teacher.name}
        subTitle={teacher.language}
        footer={footer}
        header={header}
        className="md:w-25rem"
      >
        <p className="m-0">{teacher.cv}</p>
      </Card>
    </div>
  );
};
