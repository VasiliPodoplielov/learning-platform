import { Card } from 'primereact/card';

import { Advantage } from './types';

interface Props {
  advantage: Advantage;
}

export const TranslateCard = ({ advantage }: Props) => {
  const { imageUrl, advantageTitle, advantageSubTitle } = advantage;

  return (
    <Card className="flex-1 text-center mb-4 mx-2">
      <img src={imageUrl} alt="Advantage" className="w-5rem shadow-lg" />
      <div className="pt-5 text-4xl">{advantageTitle}</div>
      <p className="text-xl">{advantageSubTitle}</p>
    </Card>
  );
};
