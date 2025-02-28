import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import { RoutesList } from './RoutList';

export const MyAppRouter = () => <RouterProvider router={createBrowserRouter(RoutesList)} />;
