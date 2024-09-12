import './App.css';
import './primereact-theme/theme.css';

import { FreeLesson } from './components/FreeLesson';
import { Header } from './components/Header';
import { SiteInfo } from './components/SiteInfo';
import { Teachers } from './components/Teachers';
import { AnswersList } from './components/Answers';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';

export const App = () => (
  <>
    <Header />
    <SiteInfo />
    <Teachers />
    <FreeLesson />
    <AnswersList />
    <Reviews />
    <Footer />
  </>
);
