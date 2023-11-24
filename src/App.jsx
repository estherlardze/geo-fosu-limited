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



function App() {

  useEffect(() => {
    AOS.init({duration: 1000});
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
      <Route path="/research-consult" element={<ResearchConsult/>}/>
      <Route path="/project-consult" element={<ProjectConsult/>}/>
      <Route path="/research-topic-one" element={<ResearchTopicOne/>}/>
      <Route path="/research-topic-two" element={<ResearchTopicTwo/>}/>
      <Route path="/research-topic-three" element={<ResearchTopicThree/>}/>
      <Route path="/research-topic-four" element={<ResearchTopicFour/>}/>
     </Routes>

    </BrowserRouter>
  )
}

export default App
