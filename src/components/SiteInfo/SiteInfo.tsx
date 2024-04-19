import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.css';

export const SiteInfo = () => {
  const { t } = useTranslation();

  const header = (
    <div className={styles.bgHeaderCard}>
      <div className="flex flex-column align-items-end pt-8 pr-5">
        <p className="text-100 text-2xl">{t('SiteInfoSection.textSignUp')}</p>
        <Button label={t('buttons.SignUpClass')} />
      </div>
    </div>
  );

  return (
    <Card
      title={t('SiteInfoSection.tittleInfo')}
      subTitle={t('SiteInfoSection.subTitleInfo')}
      header={header}
    >
      <p className="m-0">{t('SiteInfoSection.textInfo')}</p>
    </Card>
  );
};
