import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {About, Construction, Contact, Home, Management, Projects, Research } from './pages'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



function App() {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/research" element={<Research/>}/>
      <Route path="/management" element={<Management/>}/>
      <Route path="/construction" element={<Construction/>}/>
     </Routes>

    </BrowserRouter>
  )
}

export default App
