import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../fragments/footer';
import Header from '../fragments/header';

import useScrollToTop from '../../hooks/useScrollToTop';

const MainLayout = () => {
  useScrollToTop();
  
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default MainLayout;