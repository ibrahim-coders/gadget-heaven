import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import Home from '../Pages/Home';
import Statistic from '../Pages/Statistic';
import DeshBoard from '../Pages/DeshBoard';

import AllProducats from '../../AllProducats';
import ErrorPage from '../Pages/ErrorPage';
import ProducatDetails from '../Pages/ProducatDetails';

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
            path: '/category/:category',
            element: <AllProducats />,
            loader: () => fetch('../producat.json'),
          },
          {
            path: 'producat/:Id',
            element: <ProducatDetails />,
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
    ],
  },
]);

export default router;
