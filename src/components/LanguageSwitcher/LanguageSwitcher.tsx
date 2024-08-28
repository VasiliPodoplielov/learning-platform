import './flag.css';

import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { useTranslation } from 'react-i18next';

import { COUNTRIES } from './constants.ts';
import { countryOptionTemplate } from './dataHelpers.tsx';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleCountryChange = (e: DropdownChangeEvent) => {
    i18n.changeLanguage(e.value.toLowerCase());
  };

  return (
    <div className="card flex justify-content-center mr-3">
      <Dropdown
        value={i18n.language.toUpperCase()}
        options={COUNTRIES}
        onChange={handleCountryChange}
        valueTemplate={countryOptionTemplate}
        itemTemplate={countryOptionTemplate}
        className="xl:w-7rem w-full w-5rem w-full"
      />
    </div>
  );
};
