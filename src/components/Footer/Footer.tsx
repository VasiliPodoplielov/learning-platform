import { Menu } from 'primereact/menu';
import { useTranslation } from 'react-i18next';

import { getFooterItems } from './dataHelpers';

export const Footer = () => {
  const { t } = useTranslation();
  const { links, contacts, address } = getFooterItems(t);

  return (
    <div className="card flex flex-row justify-content-around p-2 bg-bluegray-900">
      <div className="flex flex-column align-items-center">
        <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="60" />
        <ul className="flex flex-row justify-content-around list-none">
          <li className="p-3">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="pi pi-facebook" aria-hidden="true"></i>{' '}
              <span className="sr-only">Facebook</span>
            </a>
          </li>
          <li className="p-3">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <i className="pi pi-instagram" aria-hidden="true"></i>{' '}
              <span className="sr-only">Instagram</span>
            </a>
          </li>
          <li className="p-3">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <i className="pi pi-linkedin" aria-hidden="true"></i>{' '}
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
      <Menu style={{ background: 'none', border: 'none' }} model={links} />
      <Menu style={{ background: 'none', border: 'none' }} model={contacts} />
      <Menu style={{ background: 'none', border: 'none' }} model={address} />
    </div>
  );
};
