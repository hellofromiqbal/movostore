import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/home/index.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
);
