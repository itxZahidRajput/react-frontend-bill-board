import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import './assets/navbar.css';
import './assets/footer.css';

const Homepage = lazy(() => import('./components/Homepage'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const AddBillboard = lazy(() => import('./components/AddBillboard/AddBillboard'));

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/add-billboard" element={<AddBillboard />} />
          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}