import React from 'react';
import ReactDOM from 'react-dom';
import Navvy from './App';
import About from './components/pages/About';
import Works from './components/pages/Works';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Footer from './components/Footer'
import './index.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';


ReactDOM.render(
  <Router>
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
      <Route
        path="/Contact"
        element={<Contact />}
      />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById('root')
);


