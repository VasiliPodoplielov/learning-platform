import './App.css';

import { AnswersList } from './components/Answers';
import { Header } from './components/Header';
import { SiteInfo } from './components/SiteInfo';
import { Teachers } from './components/Teachers';

export const App = () => (
  <>
    <Header />
    <SiteInfo />
    <Teachers />
    <AnswersList />
  </>
);
