import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/vela-orange/theme.css';
import './index.css';
import './i18n/i18n.ts';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { App } from './App.tsx';
import { Header } from './components/Header/Header.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/learning-platform">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/translations" element={<Header />} />
    </Routes>
  </BrowserRouter>,
);
