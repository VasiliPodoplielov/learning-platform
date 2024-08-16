import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.css';

export const SiteInfo = () => {
  const { t } = useTranslation();

  const header = (
    <div className={styles.bgHeaderCard}>
      <div className="flex flex-column align-items-end pt-8 pr-5">
        <p className="text-white text-2xl bg-black border-round-md">
          {t('siteInfoSection.textSignUp')}
        </p>
        <Button label={t('buttons.signUpClass')} />
      </div>
    </div>
  );

  return (
    <Card
      title={t('siteInfoSection.titleInfo')}
      subTitle={t('siteInfoSection.subTitleInfo')}
      header={header}
    >
      <p className="m-0">{t('siteInfoSection.textInfo')}</p>
    </Card>
  );
};
