import { AccordionTab } from 'primereact/accordion';

import { typesAnswer } from './types';

interface Props {
  answer: typesAnswer;
}

export const Answer = ({ answer }: Props) => {
  const { headerAnswer, textAnswers } = answer;

  return (
    <AccordionTab header={headerAnswer}>
      <p className="m-0">{textAnswers}</p>
    </AccordionTab>
  );
};
