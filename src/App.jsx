import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Work from './components/Work'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <div className='bg-gray-200 h-[80vh] '>
      <Hero/>
      </div>
      <div className='h-[50vh]'><Feature/></div>
      
      <div className='bg-gray-200 h-[90vh] '>
      <Work/>
      </div>
      <div className='bg-pink-300 h-[60vh] '>
      <Footer/>
      </div>
    </>
  )
}

export default App
