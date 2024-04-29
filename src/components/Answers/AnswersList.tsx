import { Accordion } from 'primereact/accordion';
import { useTranslation } from 'react-i18next';

import { Answers } from './Answers';
import { getAnswers } from './dataHelpers';

export const AnswersList = () => {
  const { t } = useTranslation();
  const answers = getAnswers(t);
  return (
    <div className="card">
      <h2>{t('answersSection.titleAnswerSection')}</h2>
      <Accordion>
        {answers.map((answer) => (
          <Answers key={answer.id} answer={answer} />
        ))}
      </Accordion>
    </div>
  );
};
