import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
// import Footer from '../components/Footer'
import Home from './Frontend/Home'
import About from './Frontend/About'
import Services from './Frontend/Services'
import Industries from './Frontend/Industries'
import Career from './Frontend/Career/Career'
import Contact from './Frontend/Contact/contact'
import PlatForms from './Frontend/PlatForms'

export default function Index() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services/*' element={<Services />} />
        <Route path='/industries/*' element={<Industries />} />
        <Route path='/platforms/*' element={<PlatForms />} />
        <Route path='/Career' element={<Career />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* <Footer/> */}
    </>
  )
}
