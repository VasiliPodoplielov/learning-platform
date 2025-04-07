import { Avatar } from 'primereact/avatar';
import { Card } from 'primereact/card';
import { useTranslation } from 'react-i18next';

import { Review } from './types';

interface Props {
  reviews: Review[];
}

export const ReviewCard = ({ reviews }: Props) => {
  const { t } = useTranslation();

  return (
    <Card
      footer={
        <div className="flex flex-column gap-4 justify-content-between align-items-center">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-grow-1 align-items-center gap-2 w-full p-3 border-2 border-round surface-border"
            >
              <div>
                <Avatar label={review.label} style={review.style} shape="circle" size="xlarge" />
              </div>
              <div className="flex flex-column w-full">
                <div className="flex justify-content-between mb-2">
                  <span className="font-bold text-bluegray-50">{review.name}</span>
                  <a
                    className="text-yellow-400"
                    href="https://www.superprof.com.ua/budu-tvoim-providnykom-sviti-anhliiskoi-zrobliu-shliakh-tvoiei-mety-lehshym-tsikavishym.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t('reviewsSection.respondLinkText')}
                  </a>
                </div>
                <p className="m-0 text-gray-400">{review.respond}</p>
              </div>
            </div>
          ))}
        </div>
      }
      className="min-h-full"
    />
  );
};
