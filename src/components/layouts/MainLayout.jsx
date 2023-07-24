import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../fragments/footer';

const MainLayout = () => {
  return (
    <>
      <div>
        <h1>Header</h1>
      </div>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default MainLayout;