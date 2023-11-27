import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { lazy, Suspense } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Loader from './components/Loader';
const LazyProject = lazy(() => import('./pages/Projects'));
import {
  About,  Construction,  Contact,  
  Home,  Management, Research ,
  ProjectConsult, ResearchConsult, 
  ResearchTopicOne, ResearchTopicTwo, ResearchTopicThree, ResearchTopicFour
} from './pages'

import ReactGA from 'react-ga';
ReactGA.initialize('G-DQ52YK9VX1');



function App() {

  useEffect(() => {
     AOS.init({ duration: 1000 });

     ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);


  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route 
         path="/projects" 
         element={
           <Suspense fallback={<Loader/>}>
             <LazyProject/>
           </Suspense>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/research" element={<Research/>}/>
      <Route path="/management" element={<Management/>}/>
      <Route path="/construction" element={<Construction/>}/>
      <Route path="/projects/research-consult" element={<ResearchConsult/>}/>
      <Route path="/projects/project-consult" element={<ProjectConsult/>}/>
      <Route path="/projects/research-consult/ai-device" element={<ResearchTopicOne/>}/>
      <Route path="/projects/research-consult/real-estates" element={<ResearchTopicTwo/>}/>
      <Route path="/projects/research-consult/project-management" element={<ResearchTopicThree/>}/>
      <Route path="/projects/research-consult/green-supply-chain" element={<ResearchTopicFour/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
