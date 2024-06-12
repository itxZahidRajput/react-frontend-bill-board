import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Homepage from './components/Homepage';
import ProductDetail from './components/ProductDetail';
import './assets/navbar.css';
import './assets/footer.css'

function App() {
  return (


    <BrowserRouter>
      <Navbar />
      <Routes>
        < Route path="/" element={<Homepage />} />
        < Route path="/product-detail" element={<ProductDetail />} />
        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>



  )
}

export default App
