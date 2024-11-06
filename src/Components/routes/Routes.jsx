import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import Home from '../Pages/Home';
import Statistic from '../Pages/Statistic';
import DeshBoard from '../Pages/DeshBoard';
import AllProducats from '../../AllProducats';
import ErrorPage from '../Pages/ErrorPage';
import ProducatDetails from '../Pages/ProducatDetails';
import Contact from '../Pages/Contact';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('../categories.json'),

        children: [
          {
            path: '/',
            element: <AllProducats />,
            loader: () => fetch('../producat.json'),
          },
          {
            path: '/category/:category',
            element: <AllProducats />,
            loader: () => fetch('../producat.json'),
          },
        ],
      },

      {
        path: 'statistic',
        element: <Statistic />,
      },
      {
        path: '/deshboard',
        element: <DeshBoard />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/producat/:id',
        element: <ProducatDetails />,
        loader: () => fetch('../producat.json'),
      },
    ],
  },
]);

export default router;
