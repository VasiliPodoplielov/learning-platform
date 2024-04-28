export const getAnswers = (getTranslation: (key: string) => string) => [
  {
    id: '1',
    headerAnswer: getTranslation('answersSection.answerOne.headerAnswer'),
    textAnswers: getTranslation('answersSection.answerOne.textAnswers'),
  },
  {
    id: '2',
    headerAnswer: getTranslation('answersSection.answerTwo.headerAnswer'),
    textAnswers: getTranslation('answersSection.answerTwo.textAnswers'),
  },
  {
    id: '3',
    headerAnswer: getTranslation('answersSection.answerThree.headerAnswer'),
    textAnswers: getTranslation('answersSection.answerThree.textAnswers'),
  },
  {
    id: '4',
    headerAnswer: getTranslation('answersSection.answerFour.headerAnswer'),
    textAnswers: getTranslation('answersSection.answerFour.textAnswers'),
  },
];
