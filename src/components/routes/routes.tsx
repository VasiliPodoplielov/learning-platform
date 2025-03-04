import { Outlet } from 'react-router';
import { Header } from '../Header/Header.tsx';
import { PageHome } from '../tamplate/PageHome.tsx';
import { TranslatePage } from '../Translate/TranslatePage.tsx';
import { Footer } from '../Footer/Footer.tsx';

export const routes = [
  {
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: 'learning-platform/',
        element: <PageHome />,
      },
      {
        path: 'learning-platform/translations',
        element: <TranslatePage />,
      },
    ],
  },
];
