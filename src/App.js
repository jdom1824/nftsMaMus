import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './navbar/CustomNavbar';
import Home from './home/Home';
import About from './about/About';
import Footer from './footer/Footer';
import Services from './services/Service';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Services/>
      <Footer/>
    </Router>
  );
};

export default App;
