import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes';

export const MyAppRouter = () => <RouterProvider router={createBrowserRouter(routes)} />;
