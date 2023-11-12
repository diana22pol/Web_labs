import React from 'react';
import Header from './containers/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Catalog from './pages/Catalog'

function App() {
  return (
    <Router>
      <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Catalog" element={<Catalog/>} />
            <Route path="/Cart" element={<div><Header /><h1>Soon...</h1></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
