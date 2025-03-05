import { AnswersList } from '../Answers';
import { FreeLesson } from '../FreeLesson';
import { Reviews } from '../Reviews';
import { SiteInfo } from '../SiteInfo';
import { Teachers } from '../Teachers';

export const PageHome = () => (
  <>
    <SiteInfo />
    <Teachers />
    <FreeLesson />
    <AnswersList />
    <Reviews />
  </>
);
