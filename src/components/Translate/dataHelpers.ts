import accessibilityIcon from 'src/assets/images/Translate/accessibility_1.png';
import qualityIcon from 'src/assets/images/Translate/quality_1.png';
import timeIcon from 'src/assets/images/Translate/time_1.png';

import { Advantage } from './types.ts';

export const getAdvantages = (getTranslation: (key: string) => string): Advantage[] => {
  const advantages = [
    {
      id: '1',
      imageUrl: qualityIcon,
      advantageTitle: getTranslation('translate.advantages.titleOne'),
      advantageSubTitle: getTranslation('translate.advantages.subTitleOne'),
    },
    {
      id: '2',
      imageUrl: timeIcon,
      advantageTitle: getTranslation('translate.advantages.titleTwo'),
      advantageSubTitle: getTranslation('translate.advantages.subTitleTwo'),
    },
    {
      id: '3',
      imageUrl: accessibilityIcon,
      advantageTitle: getTranslation('translate.advantages.titleThree'),
      advantageSubTitle: getTranslation('translate.advantages.subTitleThree'),
    },
  ];
  return advantages;
};
