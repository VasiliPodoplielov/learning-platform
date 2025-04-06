import { Carousel } from 'primereact/carousel';
import { useTranslation } from 'react-i18next';

import {
  RESPONSIVE_OPTIONS,
  REVIEWS_SCROLL_ITEMS_COUNT,
  REVIEWS_VISIBLE_ITEMS_COUNT,
} from './constants';
import { getReviews } from './dataHelpers';
import { ReviewCard } from './ReviewCard';
import { Review } from './types';

export const Reviews = () => {
  const { t } = useTranslation();
  const reviews = getReviews(t);

  const groupedReviews: Review[][] = [];
  for (let i = 0; i < reviews.length; i += 3) {
    groupedReviews.push(reviews.slice(i, i + 3));
  }

  return (
    <div id="reviews" className="h-screen card bg-black pt-8">
      <h2 className="text-6xl text-center">{t('reviewsSection.titleSection')}</h2>
      <h3 className="text-1xl text-center text-gray-400">{t('reviewsSection.subTitleSection')}</h3>
      <Carousel
        value={groupedReviews}
        numVisible={REVIEWS_VISIBLE_ITEMS_COUNT}
        numScroll={REVIEWS_SCROLL_ITEMS_COUNT}
        circular={true}
        responsiveOptions={RESPONSIVE_OPTIONS}
        itemTemplate={(group: Review[]): React.ReactNode => <ReviewCard reviews={group} />}
      />
    </div>
  );
};
