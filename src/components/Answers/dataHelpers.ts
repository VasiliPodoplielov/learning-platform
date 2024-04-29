import { Answer } from './types';

export const getAnswers = (getTranslation: (key: string) => string): Answer[] => [
  {
    id: '1',
    question: getTranslation('answersSection.answerOne.question'),
    response: getTranslation('answersSection.answerOne.response'),
  },
  {
    id: '2',
    question: getTranslation('answersSection.answerTwo.question'),
    response: getTranslation('answersSection.answerTwo.response'),
  },
  {
    id: '3',
    question: getTranslation('answersSection.answerThree.question'),
    response: getTranslation('answersSection.answerThree.response'),
  },
  {
    id: '4',
    question: getTranslation('answersSection.answerFour.question'),
    response: getTranslation('answersSection.answerFour.response'),
  },
];
