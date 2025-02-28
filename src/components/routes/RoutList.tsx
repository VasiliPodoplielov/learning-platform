import { PageHome } from '../tamplate/PageHome.tsx';
import { PageTemplate } from '../tamplate/PageTemplate.tsx';
import { TranslatePage } from '../Translate/TranslatePage.tsx';
import { _URL } from './URL';

export const RoutesList = [
  {
    element: <PageTemplate />,
    children: [
      {
        path: _URL.HOME,
        element: <PageHome />,
      },
      {
        path: _URL.TRANSLATE,
        element: <TranslatePage />,
      },
    ],
  },
];
