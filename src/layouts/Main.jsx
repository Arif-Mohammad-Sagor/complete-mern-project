import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../pages/Shared/Navbar'
import Footer from '../pages/Shared/Footer'

const Main = () => {
  const location = useLocation();
  const noHead_noFoot = location.pathname.includes('login') || location.pathname.includes('/logout');
  return (
    <div>
      {noHead_noFoot || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHead_noFoot || <Footer></Footer>}
    </div>
  );
}

export default Main