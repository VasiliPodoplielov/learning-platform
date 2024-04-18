import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { useTranslation } from 'react-i18next';

import { LanguageSwitcher } from '../LanguageSwitcher';
import { getMenuItems } from './dataHelpers';

export const Header = () => {
  const { t } = useTranslation();

  const logo = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-5"
    />
  );
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
