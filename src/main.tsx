import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/vela-orange/theme.css';
import './index.css';
import './i18n/i18n.ts';
import { ReactSVG } from 'react-svg';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { App } from './App.tsx';
import { TranslatePage } from './components/Translate/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/learning-platform">
    <ReactSVG src="svg.svg" />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/translations" element={<TranslatePage />} />
    </Routes>
  </BrowserRouter>,
);
