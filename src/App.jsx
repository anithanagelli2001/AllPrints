// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Process from './components/Process';
import Order from './components/Order';
import Contact from './components/Contact';
import Reviews from './components/Reviews';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 w-full font-serif">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
