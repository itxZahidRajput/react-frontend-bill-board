import React from 'react';
import Navbar from './components/Navbar';
import Category from './components/Category';
import Selections from './components/Selections';
import Testmonials from './components/Testmonials';
import Destination from './components/destination';
import Footer from './components/footer';
import Section from './components/section';
import Trymore from './components/Trymore';
import './components/new.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Section />
        <Category />
        <Selections />
        <Destination />  
        <Trymore />
        <Testmonials />

      </main>
      <Footer />
    </>
  )
}

export default App
