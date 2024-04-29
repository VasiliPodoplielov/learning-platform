import { AccordionTab } from 'primereact/accordion';

import { Answer } from './types';

interface Props {
  answer: Answer;
}

export const Answers = ({ answer }: Props) => {
  const { question, response } = answer;

  return (
    <AccordionTab header={question}>
      <p className="m-0">{response}</p>
    </AccordionTab>
  );
};
