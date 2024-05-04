import { Avatar } from 'primereact/avatar';
import { Card } from 'primereact/card';

import { Review } from './types';

interface Props {
  review: Review;
}

export const ReviewCard = ({ review }: Props) => {
  const { respond, name, iconUrl, linkRespond } = review;

  return (
    <Card
      onClick={() => window.open(linkRespond)}
      footer={
        <div className="flex align-items-center gap-2">
          <Avatar image={iconUrl} shape="circle" />
          <span className="font-bold text-bluegray-50">{name}</span>
        </div>
      }
      className="min-h-full m-6"
    >
      <p className="m-0">{respond}</p>
    </Card>
  );
};
