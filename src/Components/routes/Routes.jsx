import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import Home from '../Pages/Home';
import Statistic from '../Pages/Statistic';
import DeshBoard from '../Pages/DeshBoard';
import Producats from '../../Producats';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <Producats />,
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
    ],
  },
]);

export default router;
