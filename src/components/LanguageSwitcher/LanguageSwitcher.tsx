import './flag.css';

import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { useTranslation } from 'react-i18next';

import { COUNTIES } from './constants.ts';
import { countryOptionTemplate } from './template.tsx';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleCountryChange = (e: DropdownChangeEvent) => {
    i18n.changeLanguage(e.value.toLowerCase());
  };

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={i18n.language.toUpperCase()}
        options={COUNTIES}
        onChange={handleCountryChange}
        optionLabel="name"
        valueTemplate={countryOptionTemplate}
        itemTemplate={countryOptionTemplate}
        className="w-full md:w-6rem"
      />
    </div>
  );
};
