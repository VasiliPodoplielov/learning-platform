import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { useTranslation } from 'react-i18next';
import logoImage from 'src/assets/images/logo.png';

import { LanguageSwitcher } from '../LanguageSwitcher';
import { getMenuItems } from './dataHelpers';

export const Header = () => {
  const { t } = useTranslation();

  const logo = <img alt="logo" src={logoImage} height="100" className="mr-1" />;
  const headerActions = (
    <div className="flex justify-content-end gap-2">
      <Button label={t('buttons.trialClass')} />
      <LanguageSwitcher />
    </div>
  );

  return (
    <div className="header">
      <Menubar className="text-xl" model={getMenuItems(t)} start={logo} end={headerActions} />
    </div>
  );
};
