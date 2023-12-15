import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import CartPage from './components/Item/Item';

function App() {
  return (
    <Router>
      <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Catalog" element={<Catalog/>} />
            <Route path="/Cart" element={<h1>Soon...</h1>} />
            <Route path="/catalog/:id" element={<CartPage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
