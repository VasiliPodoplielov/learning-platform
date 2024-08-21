import Anastasiia from 'src/assets/images/teachers/Anastasia.png';
import Diana from 'src/assets/images/teachers/Diana.png';
import Sofiia from 'src/assets/images/teachers/Sofiia.png';

import { Teacher } from './types.ts';

export const getTeachers = (getTranslation: (key: string) => string): Teacher[] => [
  {
    id: '1',
    imageUrl: Sofiia,
    name: 'Sofiia',
    language: getTranslation('teachersSection.teacherSofiia.language'),
    introduction: getTranslation('teachersSection.teacherSofiia.introduction'),
  },
  {
    id: '2',
    imageUrl: Anastasiia,
    name: 'Anastasiia',
    language: getTranslation('teachersSection.teacherAnastasiia.language'),
    introduction: getTranslation('teachersSection.teacherAnastasiia.introduction'),
  },
  {
    id: '3',
    imageUrl: Diana,
    name: 'Diana',
    language: getTranslation('teachersSection.teacherDiana.language'),
    introduction: getTranslation('teachersSection.teacherDiana.introduction'),
  },
];
