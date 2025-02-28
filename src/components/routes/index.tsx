import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { RoutesList } from './RoutList';

export const MyAppRouter = () => {
  return <RouterProvider router={createBrowserRouter(RoutesList)} />;
};
