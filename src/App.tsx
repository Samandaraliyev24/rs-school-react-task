import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import * as Pages from './pages';
import './App.css';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Pages.Home />,
  },
  {
    path: '/about',
    element: <Pages.About />,
  },
  {
    path: '/form',
    element: <Pages.Form />,
  },
  {
    path: '/*',
    element: <Pages.NotFound />,
  },
]);
