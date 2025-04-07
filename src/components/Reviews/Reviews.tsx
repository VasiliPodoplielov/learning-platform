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

const chunkArray = <T,>(arr: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );

export const Reviews = () => {
  const { t } = useTranslation();
  const reviews = getReviews(t);

  return (
    <div id="reviews" className="h-screen card bg-black pt-8">
      <h2 className="text-6xl text-center">{t('reviewsSection.titleSection')}</h2>
      <h3 className="text-1xl text-center text-gray-400">{t('reviewsSection.subTitleSection')}</h3>
      <Carousel
        value={chunkArray(reviews, 3)}
        numVisible={REVIEWS_VISIBLE_ITEMS_COUNT}
        numScroll={REVIEWS_SCROLL_ITEMS_COUNT}
        circular={true}
        responsiveOptions={RESPONSIVE_OPTIONS}
        itemTemplate={(group: Review[]): React.ReactNode => <ReviewCard reviews={group} />}
      />
    </div>
  );
};
