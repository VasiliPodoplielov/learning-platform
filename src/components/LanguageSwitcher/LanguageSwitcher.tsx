import './flag.css';

import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { useTranslation } from 'react-i18next';

import { countries } from './countries.ts';
import { countryOptionTemplate } from './Template';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleCountryChange = (e: DropdownChangeEvent) => {
    i18n.changeLanguage(e.value.toLowerCase());
  };

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={i18n.language.toUpperCase()}
        options={countries}
        onChange={handleCountryChange}
        optionLabel="name"
        valueTemplate={countryOptionTemplate}
        itemTemplate={countryOptionTemplate}
        className="w-full md:w-6rem"
      />
    </div>
  );
};
