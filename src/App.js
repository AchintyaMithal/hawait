import React from "react";
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import Hero from './components/Hero';
import Selects from './components/Selects';
import Activities from './components/Activities';
import Categories from './components/Categories';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';


function App() {

 return (
    
    <Router>
    
      
      <Routes>
        <Route path="/" element={
        <div>
          <Navbar />
          <Hero />
          <Selects />
          <Categories />
          <Footer />
        </div>} />
        <Route path="/activities"  element={<div>
          <Navbar />
          <Activities />
          <Footer />
          </div>} />
        
      </Routes>
    
  </Router>
  );
}

export default App;
