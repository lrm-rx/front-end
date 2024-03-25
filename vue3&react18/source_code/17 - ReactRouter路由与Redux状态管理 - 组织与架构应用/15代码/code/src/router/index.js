import { createBrowserRouter, Navigate, redirect } from 'react-router-dom'

import App from '../App';
import Index from '../views/Index/Index';
import User from '../views/User/User';
import Login from '../views/Login/Login';
import store from '../store';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/index" />
      },
      {
        path: 'index',
        element: <Index />
      },
      {
        path: 'user',
        element: <User />,
        loader(){
          if(!store.getState().user.name){
            return redirect('/login')
          }
        }
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;