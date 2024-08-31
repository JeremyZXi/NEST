import React, { useState, useEffect, useRef  } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import other components as needed
import Landing from "./pages/landing";
import About from "./pages/about";
import Feedback from "./pages/feedback";
function App() {
  return (
      <Router>
          <div className="font-blinker flex flex-col min-h-screen overflow-x-hidden">
              <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/feedback" element={<Feedback />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
