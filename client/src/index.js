import React from 'react';
import ReactDOM from 'react-dom';
import Navvy from './App';
import About from './components/pages/About';
import Works from './components/pages/Works';
import Resume from './components/pages/Resume';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Navvy />
    <Routes>
    <Route
        path="/"
        element={<About />}
      />
      <Route
        path="/About"
        element={<About />}
      />
      <Route
        path="/Works"
        element={<Works />}
      />
      <Route
        path="/Resume"
        element={<Resume />}
      />
      
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


