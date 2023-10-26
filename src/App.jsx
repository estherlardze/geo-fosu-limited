import  Home  from './pages/Home'
import  About  from './pages/About'
import  Projects  from './pages/Projects'
import  Research  from './pages/Research'
import  Management  from './pages/Management'
import  Construction  from './pages/Construction'
import  Contact  from './pages/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

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
