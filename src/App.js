import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/Home';
import About from './components/About';
import WhatWeDo from './components/Kitchen';
import CpepeSection from './components/CpepeSection';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ChickenRecipe from './components/ChickenRecipe';
import DesertsRecipe from './components/DesertsRecipe';
import AppetizerRecipe from './components/AppetizerRecipe';
import DrinksRecipe from './components/DrinksRecipe';
import './App.css';

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={
        <>
          <Home />
          <About />
          <section id="whitepaper">
            <WhatWeDo />
          </section>
          <section id="roadmap">
            <CpepeSection />
          </section>
          <Footer />
        </>
      } />
      <Route path="/chicken-recipe" element={<ChickenRecipe />} />
      <Route path="/deserts-recipe" element={<DesertsRecipe />} />
      <Route path="/appetizers-recipe" element={<AppetizerRecipe />} />
      <Route path="/drinks-recipe" element={<DrinksRecipe />} />
    </Routes>
  </Router>
);

export default App;