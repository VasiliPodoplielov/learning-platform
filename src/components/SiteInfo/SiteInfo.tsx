import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.css';

export const SiteInfo = () => {
  const { t } = useTranslation();

  const customHeader = (
    <div>
      <h1 className="custom-title-class pb-5">{t('siteInfoSection.titleInfo')}</h1>
      <h3 className="m-5 pb-7">{t('siteInfoSection.subTitleInfo')}</h3>
    </div>
  );

  return (
    <div
      className={`headerSection flex-column flex justify-content-center h-screen m-0 p-0 ${styles.bgHeaderCard}`}
    >
      <Card
        className="pt-8 pb-7 text-center border-noround shadow-none"
        style={{ background: 'transparent' }}
        header={customHeader}
      >
        <Button className="mt-2 uppercase letterSpacing_2" label={t('buttons.signUpClass')} />
      </Card>
    </div>
  );
};
