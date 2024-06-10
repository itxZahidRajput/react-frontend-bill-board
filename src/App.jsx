import React from 'react'
import Navbar from './components/Navbar'
import Category from './components/Category'
import Selections from './components/Selections'
import Testmonials from './components/Testmonials'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Category />
        <Selections />
        <Testmonials />
      </main>
    </>
  )
}

export default App
