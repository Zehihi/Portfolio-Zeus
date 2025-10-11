import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar.jsx'
import Hero from './Hero/Hero.jsx'
import Projects from './Projects/Projects.jsx';
import Contact from './Contacts/Contact.jsx';
import Footer from './Footer/Footer.jsx';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
