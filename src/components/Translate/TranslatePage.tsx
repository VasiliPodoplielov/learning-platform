import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Form } from '../Form/Form';
import { getAdvantages } from './dataHelpers';
import styles from './styles.module.css';
import { TranslateCard } from './TranslateCard';

export const TranslatePage = () => {
  const { t } = useTranslation();
  const advantages = getAdvantages((key) => t(key));
  const [visible, setVisible] = useState(false);

  return (
    <div className={`p-0 h-screen flex-column flex justify-content-center ${styles.bgTranslate}`}>
      <div className="text-center pt-6">
        <h1 className="p-3">{t('translate.header.title')}</h1>
        <p className="p-3 text-xl">{t('translate.header.subTitle')}</p>
        <Button
          className="p-button-rounded p-button-lg pt-3 pb-3"
          label={t('translate.button.title')}
          onClick={() => setVisible(true)}
        />
        <Dialog visible={visible} className="w-full md:w-6" onHide={() => setVisible(false)}>
          <Form />
        </Dialog>
      </div>
      <div className="flex justify-around flex-wrap pt-3">
        {advantages.map((adv) => (
          <TranslateCard key={adv.id} advantage={adv} />
        ))}
      </div>
    </div>
  );
};
