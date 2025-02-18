import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/homePage';
import Braces from '../pages/braces';
import Fillings from '../pages/fillings';
import DentalImplants from '../pages/dentalImplants';
import Whitening from '../pages/whitening';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/services/braces',
    element: <Braces />,
  },
  {
    path: '/services/fillings',
    element: <Fillings />,
  },
  {
    path: '/services/implants',
    element: <DentalImplants />,
  },
  {
    path: '/services/whitening',
    element: <Whitening />,
  },

]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;