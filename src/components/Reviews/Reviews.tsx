import { Carousel } from 'primereact/carousel';
import { useTranslation } from 'react-i18next';

import {
  RESPONSIVE_OPTIONS,
  REVIEWS_SCROLL_ITEMS_COUNT,
  REVIEWS_VISIBLE_ITEMS_COUNT,
} from './constants';
import { getReviews } from './dataHelpers';
import { ReviewCard } from './ReviewCard';

export const Reviews = () => {
  const { t } = useTranslation();

  return (
    <div className="card bg-primary pt-5">
      <h2 className="text-6xl text-center">{t('reviewsSection.titleSection')}</h2>
      <Carousel
        value={getReviews(t)}
        numVisible={REVIEWS_VISIBLE_ITEMS_COUNT}
        numScroll={REVIEWS_SCROLL_ITEMS_COUNT}
        circular={true}
        responsiveOptions={RESPONSIVE_OPTIONS}
        itemTemplate={(review) => <ReviewCard key={review.id} review={review} />}
      />
    </div>
  );
};
