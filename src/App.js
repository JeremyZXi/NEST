import React, { useState, useEffect, useRef  } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
// Import other components as needed
import Landing from "./pages/landing";
function App() {
  return (
      <Router>
          <div className="font-blinker flex flex-col min-h-screen overflow-x-hidden">
              <Routes>
                  <Route path="/" element={<Landing />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
