import './App.css'
import NavagationBar from './NavagationBar'
import Footer from './Footer'

import Home from "./pages/Home"
import Cool from "./pages/Cool"
import More from "./pages/More"
import Stuff from "./pages/Stuff"
import { Routes, Route, HashRouter } from "react-router-dom";


function App() {

  return (
     <>
     <HashRouter>
       <div id ="content">
         <NavagationBar></NavagationBar>
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Home" element={<Home />} />
         <Route path="/Cool" element={<Cool />} />
         <Route path="/More" element={<More />} />
         <Route path="/Stuff" element={<Stuff />} />
         </Routes>
         <Footer></Footer>
       </div>
     </HashRouter>
   </>
  )
}

export default App
