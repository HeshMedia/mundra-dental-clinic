import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/homePage';
import Orthodontics from '../pages/orthodontics';
import Rct from '../pages/rct';
import DentalImplants from '../pages/dentalImplants';
import Whitening from '../pages/whitening';
import Extractions from '../pages/extractions';
import CrownsAndBridges from '../pages/crownsAndBridges';
import FullAndPartialDentures from '../pages/fullAndPartialDentures';
import SmileDesigning from '../pages/smileDesigning';
import Team from '../pages/team';
import About from '../pages/About';
import ReviewsPage from '../pages/reviewsPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/services/orthodontics',
    element: <Orthodontics />,  
  },
  {
    path: '/services/root-canal-treatment',
    element: <Rct />,
  },
  {
    path: '/services/dental-implants',
    element: <DentalImplants />,
  },
  {
    path: '/services/teeth-whitening',
    element: <Whitening />,
  },
  {
    path: '/services/tooth-extractions',
    element: <Extractions />,
  },
  {
    path: '/services/crowns-and-bridges',
    element: <CrownsAndBridges />,
  },
  {
    path: '/services/full-and-partial-dentures',
    element: <FullAndPartialDentures />,
  },
  {
    path: '/team',
    element: <Team />,
  },
  {
    path: '/services/smile-designing',
    element: <SmileDesigning />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/reviews',
    element: <ReviewsPage />,
  }

]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;