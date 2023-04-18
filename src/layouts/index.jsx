import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
      {!location.pathname.includes('/jeu') && <Footer />}
    </>
  );
};

export default Layout;
