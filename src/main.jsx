import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/home/index.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import SearchPage from './pages/search';
import DetailPage from './pages/detail';
import MovieListsPage from './pages/movieLists';
import MovieCart from './pages/movieCart';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/movie-cart",
        element: <MovieCart/>
      },
      {
        path: "/:movieLists",
        element: <MovieListsPage/>
      },
      {
        path: "/search/:query",
        element: <SearchPage/>
      },
      {
        path: "/detail/:id",
        element: <DetailPage/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
);
