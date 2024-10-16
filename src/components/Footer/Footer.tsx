import { Menu } from 'primereact/menu';
import { useTranslation } from 'react-i18next';
import logoImage from 'src/assets/images/logo.png';

import sharedStyles from '../styles/sharedStyles.module.css';
import { getFooterItems } from './dataHelpers';

export const Footer = () => {
  const { t } = useTranslation();
  const { links, contacts, address } = getFooterItems(t);

  return (
    <footer className="p-4 surface-900 text-white">
      <div className="flex flex-wrap justify-content-between">
        <div className="flex flex-column align-items-center lg:align-items-center col-12 lg:col-3 mb-4">
          <img alt="logo" src={logoImage} height="150" className="mb-2" />
          <ul className="list-none flex justify-content-center m-0 p-0  md:justify-content-center">
            <li className="mr-3">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <i className="pi pi-facebook text-white text-4xl"></i>
              </a>
            </li>
            <li className="mr-3">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <i className="pi pi-instagram text-white text-4xl"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <i className="pi pi-linkedin text-white text-4xl"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 flex justify-content-center sm:col-3 mb-4">
          <Menu className={`border-none ${sharedStyles.bgTransparent}`} model={links} />
        </div>
        <div className="col-12 flex justify-content-center sm:col-3 mb-4">
          <Menu className={`border-none ${sharedStyles.bgTransparent}`} model={contacts} />
        </div>
        <div className="col-12 flex justify-content-center sm:col-3 mb-4">
          <Menu className={`border-none ${sharedStyles.bgTransparent}`} model={address} />
        </div>
      </div>
      <div className="flex justify-content-between align-items-center mt-4 pt-4 border-top-1 border-gray-700">
        <p className="m-0">&copy;2024 SOUA language School. All Rights Reserved.</p>
        <div>
          <a href="/terms" className="text-white mr-3">
            Terms of Service
          </a>
          <a href="/privacy" className="text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
