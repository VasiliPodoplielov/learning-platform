import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { Dialog } from 'primereact/dialog';
import { useTranslation } from 'react-i18next';
import logoImage from 'src/assets/images/logo.png';

import { LanguageSwitcher } from '../LanguageSwitcher';
import { getMenuItems } from './dataHelpers';
import { useState } from 'react';
import { Form } from '../FreeLesson/Form';

export const Header = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  const logo = <img alt="logo" src={logoImage} height="100" className="mr-1" />;
  const headerActions = (
    <div className="flex justify-content-end gap-2">
      <Button
        className="text-xs xl:text-base"
        label={t('buttons.trialClass')}
        onClick={() => setVisible(true)}
      />
      <Dialog
        visible={visible}
        className="w-full md:w-6"
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <Form />
      </Dialog>
      <LanguageSwitcher />
    </div>
  );

  return (
    <div className="header fixed z-5 w-screen">
      <Menubar
        className="text-xs lg:text-sm  xl:text-lg border-none bg-blackTransparent60 border-noround border-transparent"
        model={getMenuItems(t)}
        start={logo}
        end={headerActions}
      />
    </div>
  );
};
