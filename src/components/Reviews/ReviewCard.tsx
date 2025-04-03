import { Avatar } from 'primereact/avatar';
import { Card } from 'primereact/card';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.css';
import { Review } from './types';

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
          </div>
          <p className="m-0">
            <span className="font-bold text-bluegray-50">{name}</span>
            <br />
            {respond}
          </p>
          <a className={styles.linkReviews} href={respondLink} target="blank">
            {t('reviewsSection.respondLinkText')}
          </a>
        </div>
      }
      className="min-h-full border-3"
    ></Card>
  );
};
