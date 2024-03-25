import { createBrowserRouter } from 'react-router-dom'
import Home from '../views/Home/Home';
import About from '../views/About/About';
import Foo from '../views/Foo/Foo';
import Bar from '../views/Bar/Bar';
import App from '../App';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />,
        children: [
          {
            path: 'foo',
            element: <Foo />
          },
          {
            path: 'bar',
            element: <Bar /> 
          }
        ]
      }
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;