import { Accordion, AccordionTab } from 'primereact/accordion';
import { useTranslation } from 'react-i18next';

import { getAnswers } from './dataHelpers';

export const AnswersList = () => {
  const { t } = useTranslation();
  const answers = getAnswers(t);

  return (
    <div className="card bg-primary p-8 flex align-items-center gap-5	">
      <h2 className="text-6xl text-center">{t('answersSection.titleAnswerSection')}</h2>
      <Accordion className="w-9">
        {answers.map((answer) => (
          <AccordionTab className="m-3" key={answer.id} header={answer.question}>
            <p className="m-0">{answer.response}</p>
          </AccordionTab>
        ))}
      </Accordion>
    </div>
  );
};
