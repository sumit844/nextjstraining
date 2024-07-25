import React from 'react';
import Header from './header';
import Footer from './footer';
import Navbar from './navbar';


function Layout({children,footerStatus}) {
  return (
    <>
    <div class="container mt-5">
      <Header/>
      
      {children}
      {!footerStatus && <Footer/>}
     
      </div>
    </>
  )
}

export default Layout
