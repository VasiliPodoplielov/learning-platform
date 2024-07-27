import './App.css';
import './primereact-theme/theme.css';

import { AnswersList } from './components/Answers';
import { FreeLesson } from './components/FreeLesson';
import { Header } from './components/Header';
import { Reviews } from './components/Reviews';
import { SiteInfo } from './components/SiteInfo';
import { Teachers } from './components/Teachers';

export const App = () => (
  <>
    <Header />
    <SiteInfo />
    <Teachers />
    <AnswersList />
    <Reviews />
    <FreeLesson />
  </>
);
