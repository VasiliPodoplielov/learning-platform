import { Avatar } from 'primereact/avatar';
import { Card } from 'primereact/card';
import { useTranslation } from 'react-i18next';

import { Review } from './types';
import { Button } from 'primereact/button';

interface Props {
  review: Review;
}

export const ReviewCard = ({ review }: Props) => {
  const { respond, name, iconUrl, respondLink } = review;
  const { t } = useTranslation();

  return (
    <Card
      footer={
        <div className="flex flex-row justify-content-between align-items-center ">
          <div className="flex align-items-center gap-2">
            <Avatar image={iconUrl} shape="circle" />
            <span className="font-bold text-bluegray-50">{name}</span>
          </div>
          <Button onClick={() => window.open(respondLink)}>
            {t('reviewsSection.respondLinkText')}
          </Button>
        </div>
      }
      className="min-h-full m-6"
    >
      <p className="m-0">{respond}</p>
    </Card>
  );
};
