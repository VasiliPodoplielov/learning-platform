import { Accordion } from 'primereact/accordion';
import { useTranslation } from 'react-i18next';

import { Answer } from './Answer';
import { getAnswers } from './dataHelpers';

export const Answers = () => {
  const { t } = useTranslation();
  const answers = getAnswers(t);
  return (
    <div className="card">
      <h2>{t('answersSection.titleAnswerSection')}</h2>
      <Accordion>
        {answers.map((answer) => (
          <Answer key={answer.id} answer={answer} />
        ))}
      </Accordion>
    </div>
  );
};
