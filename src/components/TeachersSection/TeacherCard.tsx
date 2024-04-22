import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useTranslation } from 'react-i18next';

interface Teacher {
  id: string;
  image: {
    url: string;
    altText: string;
  };
  name: string;
  language: string;
  cv: string;
}

export const TeacherCard = ({ teacher }: { teacher: Teacher }) => {
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
