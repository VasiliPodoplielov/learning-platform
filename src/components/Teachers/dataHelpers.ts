import TeacherAnastasiaImg from 'src/assets/images/teachers/TeacherAnastasiaImg.png';
import TeacherDianaImg from 'src/assets/images/teachers/TeacherDianaImg.png';
import TeacherSofiiaImg from 'src/assets/images/teachers/TeacherSofiiaImg.png';

import { Teacher } from './types.ts';

export const getTeachers = (getTranslation: (key: string) => string): Teacher[] => [
  {
    id: '1',
    imageUrl: TeacherSofiiaImg,
    name: 'Sofiia',
    language: getTranslation('teachersSection.teacherSofiia.language'),
    introduction: getTranslation('teachersSection.teacherSofiia.introduction'),
  },
  {
    id: '2',
    imageUrl: TeacherAnastasiaImg,
    name: 'Anastasiia',
    language: getTranslation('teachersSection.teacherAnastasiia.language'),
    introduction: getTranslation('teachersSection.teacherAnastasiia.introduction'),
  },
  {
    id: '3',
    imageUrl: TeacherDianaImg,
    name: 'Diana',
    language: getTranslation('teachersSection.teacherDiana.language'),
    introduction: getTranslation('teachersSection.teacherDiana.introduction'),
  },
];
