import manImage from 'src/assets/images/teachers/user-female.png';
import womanImage from 'src/assets/images/teachers/user-female.png';

import { Teacher } from './types.ts';

export const getTeachers = (getTranslation: (key: string) => string): Teacher[] => [
  {
    id: '1',
    imageUrl: manImage,
    name: 'Lara',
    language: getTranslation('teachersSection.teacherLara.language'),
    introduction: getTranslation('teachersSection.teacherLara.introduction'),
  },
  {
    id: '2',
    imageUrl: manImage,
    name: 'Joseph',
    language: getTranslation('teachersSection.teacherJoseph.language'),
    introduction: getTranslation('teachersSection.teacherJoseph.introduction'),
  },
  {
    id: '3',
    imageUrl: womanImage,
    name: 'Lara',
    language: getTranslation('teachersSection.teacherLara.language'),
    introduction: getTranslation('teachersSection.teacherLara.introduction'),
  },
  {
    id: '4',
    imageUrl: manImage,
    name: 'Joseph',
    language: getTranslation('teachersSection.teacherJoseph.language'),
    introduction: getTranslation('teachersSection.teacherJoseph.introduction'),
  },
  {
    id: '5',
    imageUrl: womanImage,
    name: 'Lara',
    language: getTranslation('teachersSection.teacherLara.language'),
    introduction: getTranslation('teachersSection.teacherLara.introduction'),
  },
  {
    id: '6',
    imageUrl: manImage,
    name: 'Joseph',
    language: getTranslation('teachersSection.teacherJoseph.language'),
    introduction: getTranslation('teachersSection.teacherJoseph.introduction'),
  },
  {
    id: '7',
    imageUrl: womanImage,
    name: 'Lara',
    language: getTranslation('teachersSection.teacherLara.language'),
    introduction: getTranslation('teachersSection.teacherLara.introduction'),
  },
  {
    id: '8',
    imageUrl: manImage,
    name: 'Joseph',
    language: getTranslation('teachersSection.teacherJoseph.language'),
    introduction: getTranslation('teachersSection.teacherJoseph.introduction'),
  },
];
