import { SiteInfo } from '../SiteInfo';
import { Teachers } from '../Teachers';
import { FreeLesson } from '../FreeLesson';
import { AnswersList } from '../Answers';
import { Reviews } from '../Reviews';

export const PageHome = () => (
  <>
    <SiteInfo />
    <Teachers />
    <FreeLesson />
    <AnswersList />
    <Reviews />
  </>
);
