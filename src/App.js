import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Carts from './components/Carts/Carts';
import Catalog from './components/Catalog/Catalog';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';  // Import Navbar
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <Navbar />  
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Carts cart={cart} />} />
        <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
