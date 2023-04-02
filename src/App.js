import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Selects from './components/Selects';
import Categories from './components/Categories';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Selects />
      <Categories />
    </div>
  );
}

export default App;
