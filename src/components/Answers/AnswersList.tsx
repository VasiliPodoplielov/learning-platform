import { Accordion, AccordionTab } from 'primereact/accordion';
import { useTranslation } from 'react-i18next';

import { getAnswers } from './dataHelpers';
import styles from './styles.module.css';

export const AnswersList = () => {
  const { t } = useTranslation();
  const answers = getAnswers(t);

  return (
    <div
      className={`flex flex-column lg:flex-row justify-content-around align-items-center h-screen surface-500 ${styles.bgAnswersList}`}
    >
      <h2 className="text-6xl text-center p-2 line-height-4 fadeinleft animation-duration-500">
        {t('answersSection.titleAnswerSection')}
      </h2>
      <Accordion className="w-10 fadeinright animation-duration-500">
        {answers.map((answer) => (
          <AccordionTab className="m-3" key={answer.id} header={answer.question}>
            <p>{answer.response}</p>
          </AccordionTab>
        ))}
      </Accordion>
    </div>
  );
};
