import './App.css';
import Banner from './components/Banner';
import CreateProduct from './components/CreateProduct';
import LandingPage from './components/LandingPage';
import AOS from "aos";
import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Nav/>    

      {/* Landing page section */}
      <LandingPage />

      {/* Poster  */}
      <Banner/>

      {/* Product adding section */}
      <CreateProduct/>
      
      {/* Footer */}
      <Footer/>
    </>
  );
}

export default App;
