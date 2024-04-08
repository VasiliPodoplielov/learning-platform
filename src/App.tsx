import './App.css';

import i18n from 'i18next';

import { Header } from './components/Header';

export const App = () => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Header/>
      <button onClick={() => changeLanguage('ua')}>ua</button>
      <button onClick={() => changeLanguage('en')}>en</button>
    </>
  );
};
