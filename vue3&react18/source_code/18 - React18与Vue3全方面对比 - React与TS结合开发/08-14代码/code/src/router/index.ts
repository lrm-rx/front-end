import { createBrowserRouter } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import App from '../App';
import Index from '../views/Index/Index';
import User from '../views/User/User';
import Login from '../views/Login/Login';
import React from 'react';

declare module 'react-router' {
  interface NonIndexRouteObject {
    meta?: { title: string }
  }
  interface IndexRouteObject {
    meta?: { title: string }
  }
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: React.createElement(App),
    meta: { title: '/' },
    children: [
      {
        path: 'index',
        element: React.createElement(Index),
        meta: { title: 'index' }
      },
      {
        path: 'user',
        element: React.createElement(User),
        meta: { title: 'user' }
      },
      {
        path: 'login',
        element: React.createElement(Login)
      }
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;