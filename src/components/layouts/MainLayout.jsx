import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../fragments/footer';
import Header from '../fragments/header';

const MainLayout = () => {
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