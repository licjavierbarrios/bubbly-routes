import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { BubblyContainer } from 'react-bubbly-transitions'

import About from './About'
import Contact from './Contact'
import Docs from './Docs'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <BubblyContainer />
        <Routes>
          <Route path="/" element={<Outlet />} />
          <Route index element={<Docs />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<> No match</>} />
         


        </Routes>
      
    </BrowserRouter>
  )
}

export default App
